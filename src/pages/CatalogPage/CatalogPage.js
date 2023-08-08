import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Filter, ProductItem } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsData } from '../../redux/products/action';
import { fetchCatalogData } from '../../api/api';

const CatalogPage = () => {
  const [catalogList, setCatalog] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  console.log('Products list:', products);
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
  const catalog = catalogList.find((catalog) => catalog.id === catalogId);
  const catalogProducts = products.products.filter((product) => product.catalog === catalog.code);
  return (
    <div className="catalog-page">
      <Filter catalog={catalog} />
      <div className="sorted-products">
        {catalogProducts.map((el) => (
          <ProductItem key={el.id} product={el} />
        ))}
      </div>
    </div>
  );
};

export default CatalogPage;
