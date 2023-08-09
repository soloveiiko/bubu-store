import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Filter, ProductItem } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsData } from '../../redux/products/action';
import { fetchCatalogData, fetchProducerData } from '../../api/api';
import { updateFilter } from '../../redux/filter/action';

const CatalogPage = () => {
  const [isFiltered, setIsFiltered] = useState(false);
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
    applyFilters(selectedCategory, filterData.isAvailable);
  };

  const handleAvailableFilter = (isAvailable) => {
    setFilterData((prevState) => ({
      ...prevState,
      isAvailable: isAvailable,
    }));
    applyFilters(filterData.selectedCategory, isAvailable);
  };

  const applyFilters = (categoryCode, isAvailable) => {
    let filteredProducts = catalogProducts;

    if (isAvailable) {
      filteredProducts = filteredProducts.filter((product) => product.isAvailable === isAvailable);
    }

    if (categoryCode) {
      filteredProducts = filteredProducts.filter((product) => product.category === categoryCode);
    }

    setIsFiltered(true);
    dispatch(updateFilter(filteredProducts));
  };
  return (
    <div className="catalog-page">
      <Filter
        catalog={selectedCatalog}
        isAvailable={filterData.isAvailable}
        onCategoryFilter={handleCategoryFilter}
        onAvailableFilter={handleAvailableFilter}
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
