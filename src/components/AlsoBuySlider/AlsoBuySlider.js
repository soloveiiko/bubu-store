import React from 'react';
import { ProductsSlider } from '../commons';

const AlsoBuySlider = ({ products, selectedCatalog }) => {
  const catalogProducts = products.filter((product) => product.catalog === selectedCatalog.name);
  const numSlides = products.length;
  return (
    <div className="also-buy-slider">
      <div className="container">
        <div className="title">
          <h2 className="headline">З цим також купляють</h2>
        </div>
        <ProductsSlider products={catalogProducts} numSlides={numSlides} />
      </div>
    </div>
  );
};

export default AlsoBuySlider;
