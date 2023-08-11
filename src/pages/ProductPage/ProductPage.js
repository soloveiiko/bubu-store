import React, { useEffect } from 'react';
import { Product, ProductCharacteristics, ProductDescription } from '../../components';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsData } from '../../redux/products/action';
import ProductReviews from '../../components/ProductReviews/ProductReviews';

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
  return (
    <>
      {product ? (
        <div>
          <Product product={product} />
          <ProductDescription product={product} />
          <ProductCharacteristics product={product} />
          <ProductReviews product={product} />
        </div>
      ) : (
        <div>Product not found</div>
      )}
    </>
  );
};

export default ProductPage;
