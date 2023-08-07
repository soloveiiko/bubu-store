import React, { useEffect } from 'react';
import { Product } from '../../components';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsData } from '../../redux/products/action';

const ProductPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getProductsData());
  }, [dispatch]);
  const { id } = useParams();
  const productId = id;
  if (products.isLoading) {
    return <div>Loading...</div>;
  }
  const product = products.products.find((product) => product.id === productId);
  return <div>{product ? <Product product={product} /> : <div>Product not found</div>}</div>;
};

export default ProductPage;
