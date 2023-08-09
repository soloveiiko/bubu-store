import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Filter, ProductItem } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsData } from '../../redux/products/action';
import { fetchCatalogData, fetchProducerData } from '../../api/api';
import { updateFilter } from '../../redux/filter/action';

const CatalogPage = () => {
  const [isFiltered, setIsFiltered] = useState(false);
  const [selectedProducers, setSelectedProducers] = useState([]);

  const [filterData, setFilterData] = useState({
    catalogList: [],
    producer: [],
    isAvailable: false,
    isDiscount: false,
  });
  const [isLoading, setIsLoading] = useState(true);
  const filter = useSelector((state) => state.filter);

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const catalogData = await fetchCatalogData();
        const producerData = await fetchProducerData();
        setFilterData((prevState) => ({
          ...prevState,
          catalogList: catalogData,
          producer: producerData,
        }));
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    fetchData();
    dispatch(getProductsData());
  }, [dispatch]);
  const { id } = useParams();
  const catalogId = id;
  if (isLoading) {
    return <div>Loading...</div>;
  }
  const selectedCatalog = filterData.catalogList.find((catalog) => catalog.id === catalogId);
  const catalogProducts = products.products.filter((product) => product.catalog === selectedCatalog.code);

  const handleCategoryFilter = (selectedCategory) => {
    setFilterData((prevState) => ({
      ...prevState,
      selectedCategory: selectedCategory,
    }));
    applyFilters(selectedCategory, filterData.isAvailable, filterData.isDiscount, selectedProducers);
  };

  const handleAvailableFilter = (isAvailable) => {
    setFilterData((prevState) => ({
      ...prevState,
      isAvailable: isAvailable,
    }));
    applyFilters(filterData.selectedCategory, isAvailable, filterData.isDiscount, selectedProducers);
  };
  const handleDiscountFilter = (isDiscount) => {
    setFilterData((prevState) => ({
      ...prevState,
      isDiscount: isDiscount,
    }));
    applyFilters(filterData.selectedCategory, filterData.isAvailable, isDiscount, selectedProducers);
  };
  const handleProducerFilter = (producer) => {
    const selectedProducer = selectedProducers.includes(producer.name)
      ? selectedProducers.filter((el) => el !== producer.name)
      : [...selectedProducers, producer.name];

    setSelectedProducers(selectedProducer);
    applyFilters(filterData.selectedCategory, filterData.isAvailable, filterData.isDiscount, selectedProducer);
    console.log('updatedSelectedProducers', selectedProducer);
  };
  const applyFilters = (category, isAvailable, isDiscount, producers) => {
    let filteredProducts = catalogProducts;

    if (category) {
      filteredProducts = filteredProducts.filter((product) => product.category === category);
    }
    if (isAvailable) {
      filteredProducts = filteredProducts.filter((product) => product.isAvailable === isAvailable);
    }

    if (isDiscount) {
      filteredProducts = filteredProducts.filter((product) => product.discount.isDiscount === isDiscount);
    }
    if (producers.length > 0) {
      filteredProducts = filteredProducts.filter((product) => producers.includes(product.producer));
    }

    setIsFiltered(true);
    dispatch(updateFilter(filteredProducts));
  };
  return (
    <div className="catalog-page">
      <Filter
        catalog={selectedCatalog}
        producers={filterData.producer}
        isAvailable={filterData.isAvailable}
        isDiscount={filterData.isDiscount}
        selectedProducers={selectedProducers}
        onCategoryFilter={handleCategoryFilter}
        onAvailableFilter={handleAvailableFilter}
        onDiscountFilter={handleDiscountFilter}
        onProducerFilter={handleProducerFilter}
      />
      <div className="sorted-products">
        {isFiltered ? (
          filter.filteredProducts.length > 0 ? (
            filter.filteredProducts.map((el) =>
              (filterData.isAvailable && el.isAvailable) || !filterData.isAvailable ? (
                <ProductItem key={el.id} product={el} />
              ) : null
            )
          ) : (
            <div>No such product</div>
          )
        ) : (
          catalogProducts.map((el) => <ProductItem key={el.id} product={el} />)
        )}
      </div>
    </div>
  );
};

export default CatalogPage;
