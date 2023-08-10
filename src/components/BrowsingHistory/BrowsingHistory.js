import React from 'react';
import { useSelector } from 'react-redux';
import { ProductsSlider } from '../commons';

const BrowsingHistory = () => {
  const recentlyViewedProducts = useSelector((state) => state.history.products);
  const numSlides = recentlyViewedProducts.length;

  return (
    <div className="promotion-slider">
      <div className="title">
        <h2 className="headline">Ви переглядали</h2>
      </div>
      <ProductsSlider products={recentlyViewedProducts} numSlides={numSlides} />
    </div>
  );
};

export default BrowsingHistory;
