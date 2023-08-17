import React from 'react';
import { ProductsSlider } from '../commons';

const BrowsingHistory = ({ recentlyViewedProducts }) => {
  const numSlides = recentlyViewedProducts.length;

  return (
    <div className="browsing-history-slider">
      <div className="container">
        <div className="title">
          <h2 className="headline">Ви переглядали</h2>
        </div>
        <ProductsSlider products={recentlyViewedProducts} numSlides={numSlides} />
      </div>
    </div>
  );
};

export default BrowsingHistory;
