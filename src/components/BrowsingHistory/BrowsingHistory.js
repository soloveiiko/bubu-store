import React from 'react';
import { ProductsSlider } from '../commons';

const BrowsingHistory = ({ recentlyViewedProducts }) => {
  const numSlides = recentlyViewedProducts.length;

  return (
    <div className="browsing-history-slider">
      <div className="browsing-history-slider__container container">
        <div className="browsing-history-slider__title">
          <h2 className="browsing-history-slider__headline headline">Ви переглядали</h2>
        </div>
        <ProductsSlider products={recentlyViewedProducts} numSlides={numSlides} />
      </div>
    </div>
  );
};

export default BrowsingHistory;
