import React from 'react';
import { ProductsSlider } from '../commons';

const BrowsingHistory = ({ recentlyViewedProducts }) => {
  const numSlides = recentlyViewedProducts.length;

  return (
    <div className="browsing-history-slider">
      <div className="title">
        <h2 className="headline">Ви переглядали</h2>
      </div>
      <ProductsSlider products={recentlyViewedProducts} numSlides={numSlides} />
    </div>
  );
};

export default BrowsingHistory;
