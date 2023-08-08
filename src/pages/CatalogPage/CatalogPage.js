import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Filter, ProductItem } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsData } from '../../redux/products/action';
import { fetchCatalogData } from '../../api/api';

const CatalogPage = () => {
  const [catalogList, setCatalog] = useState([]);
  // const [producerList, setProducer] = useState([]);
  // const [isAvailable, setIsAvailable] = useState(false);
  // const [isDiscount, setIsDiscount] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCatalogData();
        setCatalog(data);
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
  const selectedCatalog = catalogList.find((catalog) => catalog.id === catalogId);
  const catalogProducts = products.products.filter((product) => product.catalog === selectedCatalog.code);

  const categoriesFilter = (category) => {
    const selectedCategory = selectedCatalog.categories.find((el) => el.code === category.code);
    if (selectedCategory) {
      applyFilters(selectedCategory.code);
    }
  };

  const applyFilters = (selectedCategory) => {
    if (selectedCategory) {
      const filteredProducts = catalogProducts.filter((product) => product.category === selectedCategory);
      setFilteredProducts(filteredProducts);
      setIsFiltered(true);
      console.log('filtered Products', filteredProducts);
      console.log('catalog Products', products);
      console.log('selected Category', selectedCategory);
    } else {
      setIsFiltered(false);
      setFilteredProducts(catalogProducts);
    }
  };
  return (
    <div className="catalog-page">
      <Filter catalog={selectedCatalog} categoriesFilter={categoriesFilter} />
      <div className="sorted-products">
        {isFiltered ? (
          filteredProducts.length > 0 ? (
            filteredProducts.map((el) => <ProductItem key={el.id} product={el} />)
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
