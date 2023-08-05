import React from 'react';
import { useSelector } from 'react-redux';
import ProductItem from '../ProductItem';

const BrowsingHistory = () => {
  const recentlyViewedProducts = useSelector((state) => state.history.products.slice(-4));
  return (
    <div>
      <h2 className="headline">Ви переглядали</h2>
      {recentlyViewedProducts.map((product) => (
        <div key={product.id}>
          <ProductItem product={product} />
        </div>
      ))}
    </div>
  );
};

export default BrowsingHistory;
