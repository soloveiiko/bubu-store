import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCatalogData } from '../../redux/catalogs/action';
import { updateFilter } from '../../redux/filter/action';
import { getProductsData } from '../../redux/products/action';
import { fetchProducerData } from '../../api/api';
import { Filter, SortBy, CatalogList, Breadcrumbs } from '../../components';

const CatalogPage = () => {
  const [filterData, setFilterData] = useState({
    producer: [],
    isAvailable: false,
    isDiscount: false,
  });
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProducers, setSelectedProducers] = useState([]);
  const [selectedSort, setSelectedSort] = useState('1');
  const [visibleProducts, setVisibleProducts] = useState(3);
  const [mobile, setMobile] = useState(false);
  const [tablet, setTablet] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const products = useSelector((state) => state.products);
  const catalogsList = useSelector((state) => state.catalog.catalogs);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth < 768);
      setTablet(window.innerWidth < 1200);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(getCatalogData());

        const producerData = await fetchProducerData();
        setFilterData((prevState) => ({
          ...prevState,
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
    return <div className="container">Loading...</div>;
  }
  const selectedCatalog = catalogsList.find((catalog) => catalog.id === catalogId);
  const catalogProducts = products.products.filter((product) => product.catalog === selectedCatalog.name);
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

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };
  const handleApplyFilters = (
    selectedCategory,
    isAvailable,
    isDiscount,
    selectedProducers,
    minPriceFilter,
    maxPriceFilter
  ) => {
    const appliedFilters = {
      category: selectedCategory,
      isAvailable: isAvailable,
      isDiscount: isDiscount,
      selectedProducers: selectedProducers,
      minPrice: minPriceFilter,
      maxPrice: maxPriceFilter,
    };
    setSelectedFilters(appliedFilters);
  };
  const handleRemoveFilter = (filterKey) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filterKey]: undefined,
    }));

    if (filterKey === 'category') {
      handleCategoryFilter(undefined);
    } else if (filterKey === 'isAvailable') {
      handleAvailableFilter(false);
    } else if (filterKey === 'isDiscount') {
      handleDiscountFilter(false);
    } else if (filterKey === 'selectedProducers') {
      setSelectedProducers([]);
    } else if (filterKey === 'minPrice') {
      handlePriceFilter({ min: undefined, max: selectedFilters.maxPrice });
    } else if (filterKey === 'maxPrice') {
      handlePriceFilter({ min: selectedFilters.minPrice, max: undefined });
    }
  };
  return (
    <div className="container">
      <div className="catalog-page">
        <Breadcrumbs />
        <h2 className="headline">{selectedCatalog.name}</h2>
        <SortBy onSortChange={handleSortChange} isMobile={mobile} />
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
          isTablet={tablet}
          isOpen={isOpen}
          toggleIsOpen={toggleIsOpen}
          onApplyFilters={handleApplyFilters}
          selectedFilters={selectedFilters}
          handleRemoveFilter={handleRemoveFilter}
          selectedCategory={filterData.selectedCategory}
        />
        <CatalogList
          filter={filter}
          visibleProducts={visibleProducts}
          filterData={filterData}
          catalogProducts={catalogProducts}
          handleShowMore={handleShowMore}
        />
      </div>
    </div>
  );
};

export default CatalogPage;
