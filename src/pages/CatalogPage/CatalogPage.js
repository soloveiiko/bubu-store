import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Filter, ProductItem } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsData } from '../../redux/products/action';
import { fetchCatalogData, fetchProducerData } from '../../api/api';
import { clearFilter, updateFilter } from '../../redux/filter/action';
import { catalogList, producersList } from '../../utils/data';

const CatalogPage = () => {
  const [isLoading, setIsLoading] = useState([]);
  const [filterData, setFilterData] = useState({
    catalogList: [],
    producer: [],
    isAvailable: false,
    isDiscount: false,
    selectedCategory: null,
  });
  // const [isLoading, setIsLoading] = useState(true);
  const filter = useSelector((state) => state.filter);

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [data, data1] = [fetchCatalogData(), fetchProducerData()];
        setFilterData((prevState) => ({
          ...prevState,
          catalogList: data,
          producer: data1,
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
  const applyFilters = () => {
    let filteredProducts = catalogProducts;
    if (filteredProducts) {
      if (filterData.selectedCategory) {
        filteredProducts = filteredProducts.filter((product) => product.category === filterData.selectedCategory);
        console.log('filteredProducts selectedCategory', filteredProducts);
        console.log('filterData.selectedCategory', filterData.selectedCategory);
        dispatch(updateFilter(filteredProducts));
      }

      if (filterData.isAvailable) {
        filteredProducts = filteredProducts.filter((product) => product.isAvailable === true);
        console.log('filteredProducts', filteredProducts);
        dispatch(updateFilter(filteredProducts));
      }
    } else {
      dispatch(clearFilter());
      dispatch(getProductsData());
    }

    dispatch(updateFilter(filteredProducts));
    console.log('filtered Products', filteredProducts);
  };

  const categoriesFilter = (category) => {
    setFilterData((prevState) => ({
      ...prevState,
      selectedCategory: category.code,
    }));
    console.log('hello', category.code);
    applyFilters();
  };

  const isAvailableFilter = (isAvailable) => {
    setFilterData((prevState) => ({
      ...prevState,
      isAvailable: isAvailable,
    }));
    applyFilters();
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
