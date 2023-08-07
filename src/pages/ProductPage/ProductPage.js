import React from 'react';
import { Product } from '../../components';
import { useParams } from 'react-router-dom';
import { products } from '../../utils/data';

const ProductPage = () => {
  const { id } = useParams();
  const productId = id;
  // useEffect(() => {
  //   try {
  //     const response = promotionalProducts;
  //     return {
  //       response,
  //     };
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);
  const product = products.find((product) => product.id === productId);

  return (
    <div>
      Product Page
      <Product product={product} />
    </div>
  );
};

export default ProductPage;
