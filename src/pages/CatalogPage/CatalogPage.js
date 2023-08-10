import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Filter, SortBy } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsData } from '../../redux/products/action';
import { fetchCatalogData, fetchProducerData } from '../../api/api';
import { updateFilter } from '../../redux/filter/action';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import CatalogList from '../../components/CatalogList/CatalogList';

const CatalogPage = () => {
  const [filterData, setFilterData] = useState({
    catalogList: [],
    producer: [],
    isAvailable: false,
    isDiscount: false,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProducers, setSelectedProducers] = useState([]);
  const [selectedSort, setSelectedSort] = useState('1');
  const [visibleProducts, setVisibleProducts] = useState(16);

  const products = useSelector((state) => state.products);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

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
  const catalogPrices = catalogProducts.map((product) => product.price);
  const minPrice = Math.min(...catalogPrices);
  const maxPrice = Math.max(...catalogPrices);
  const handleSortChange = (sortId) => {
    setSelectedSort(sortId);
    applyFilters(
      filterData.selectedCategory,
      filterData.isAvailable,
      filterData.isDiscount,
      selectedProducers,
      minPrice,
      maxPrice,
      sortId
    );
  };
  const handleCategoryFilter = (selectedCategory) => {
    setFilterData((prevState) => ({
      ...prevState,
      selectedCategory: selectedCategory,
    }));

    applyFilters(
      selectedCategory,
      filterData.isAvailable,
      filterData.isDiscount,
      selectedProducers,
      minPrice,
      maxPrice,
      selectedSort
    );
  };

  const handleAvailableFilter = (isAvailable) => {
    setFilterData((prevState) => ({
      ...prevState,
      isAvailable: isAvailable,
    }));
    applyFilters(
      filterData.selectedCategory,
      isAvailable,
      filterData.isDiscount,
      selectedProducers,
      minPrice,
      maxPrice,
      selectedSort
    );
  };
  const handleDiscountFilter = (isDiscount) => {
    setFilterData((prevState) => ({
      ...prevState,
      isDiscount: isDiscount,
    }));
    applyFilters(
      filterData.selectedCategory,
      filterData.isAvailable,
      isDiscount,
      selectedProducers,
      minPrice,
      maxPrice,
      selectedSort
    );
  };
  const handleProducerFilter = (producer) => {
    const selectedProducer = selectedProducers.includes(producer.name)
      ? selectedProducers.filter((el) => el !== producer.name)
      : [...selectedProducers, producer.name];

    setSelectedProducers(selectedProducer);
    applyFilters(
      filterData.selectedCategory,
      filterData.isAvailable,
      filterData.isDiscount,
      selectedProducer,
      minPrice,
      maxPrice,
      selectedSort
    );
  };
  const handlePriceFilter = (price) => {
    const { min, max } = price;
    applyFilters(
      filterData.selectedCategory,
      filterData.isAvailable,
      filterData.isDiscount,
      selectedProducers,
      min,
      max,
      selectedSort
    );
  };
  const applyFilters = (category, isAvailable, isDiscount, producers, minPrice, maxPrice, sortId) => {
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
    if (minPrice !== undefined && maxPrice !== undefined) {
      filteredProducts = filteredProducts.filter((product) => product.price >= minPrice && product.price <= maxPrice);
    }
    if (sortId === '2') {
      filteredProducts.sort((a, b) => b.id - a.id);
    } else if (sortId === '3') {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortId === '4') {
      filteredProducts.sort((a, b) => b.price - a.price);
    }

    dispatch(updateFilter(filteredProducts));
  };
  const handleShowMore = () => {
    setVisibleProducts(visibleProducts + 10);
  };

  return (
    <div className="catalog-page">
      <Filter
        catalog={selectedCatalog}
        producers={filterData.producer}
        isAvailable={filterData.isAvailable}
        isDiscount={filterData.isDiscount}
        minPrice={minPrice}
        maxPrice={maxPrice}
        selectedProducers={selectedProducers}
        onCategoryFilter={handleCategoryFilter}
        onAvailableFilter={handleAvailableFilter}
        onDiscountFilter={handleDiscountFilter}
        onProducerFilter={handleProducerFilter}
        onPriceFilter={handlePriceFilter}
      />
      <Breadcrumbs />
      <SortBy onSortChange={handleSortChange} />
      <CatalogList
        filter={filter}
        visibleProducts={visibleProducts}
        filterData={filterData}
        catalogProducts={catalogProducts}
        handleShowMore={handleShowMore}
      />
    </div>
  );
};

export default CatalogPage;
