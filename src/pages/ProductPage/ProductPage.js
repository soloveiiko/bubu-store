import React from 'react';
import { Product } from '../../components';
import { useParams } from 'react-router-dom';
import { promotionalProducts } from '../../utils/data';

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
  const product = promotionalProducts.find((product) => product.id === productId);

  return (
    <div>
      Product Page
      <Product
        id={product.id}
        image={product.image}
        name={product.name}
        description={product.description}
        prevPrice={product.prevPrice}
        currPrice={product.currPrice}
      />
    </div>
  );
};

export default ProductPage;
