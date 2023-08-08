import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Filter, ProductItem } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsData } from '../../redux/products/action';
import { fetchCatalogData, fetchProducerData } from '../../api/api';
import { clearFilter, updateFilter } from '../../redux/filter/action';

const CatalogPage = () => {
  // const [catalogList, setCatalog] = useState([]);
  const [filterData, setFilterData] = useState({
    catalogList: [],
    producer: [],
    isAvailable: false,
    isDiscount: false,
  });
  // const [producerList, setProducer] = useState([]);
  // const [isAvailable, setIsAvailable] = useState(false);
  // const [isDiscount, setIsDiscount] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const filter = useSelector((state) => state.filter);

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCatalogData();
        const data1 = await fetchProducerData();
        setFilterData((prevState) => ({
          ...prevState,
          catalogList: data,
          producer: data1,
        }));
        // setCatalog(data);
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

  const categoriesFilter = (category) => {
    const selectedCategory = selectedCatalog.categories.find((el) => el.code === category.code);
    if (selectedCategory) {
      applyFilters(selectedCategory.code);
    }
  };
  const isAvailableFilter = (isAvailable) => {
    const isAvailableProduct = catalogProducts.filter((product) => product.isAvailable === isAvailable);
    if (isAvailableProduct) {
      setFilterData((prevState) => ({
        ...prevState,
        isAvailable: isAvailable,
      }));
      dispatch(updateFilter(isAvailableProduct));
    }
    console.log(catalogProducts[0].isAvailable);
    // setFilterData((prevState) => ({
    //   ...prevState,
    //   isAvailable: isAvailable,
    // }));
  };

  const applyFilters = (selectedCategory) => {
    if (selectedCategory) {
      const filteredProducts = catalogProducts.filter((product) => product.category === selectedCategory);
      dispatch(updateFilter(filteredProducts));
      console.log('filtered Products', filteredProducts);
      console.log('catalog Products', products);
      console.log('selected Category', selectedCategory);
    } else {
      dispatch(clearFilter());
      dispatch(updateFilter(catalogProducts));
    }
  };
  return (
    <div className="catalog-page">
      <Filter
        catalog={selectedCatalog}
        categoriesFilter={categoriesFilter}
        isAvailableFilter={isAvailableFilter}
        isAvailable={filterData.isAvailable}
      />
      <div className="sorted-products">
        {filter.isFiltered ? (
          filter.filteredProducts.length > 0 ? (
            filter.filteredProducts.map((el) => <ProductItem key={el.id} product={el} />)
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
