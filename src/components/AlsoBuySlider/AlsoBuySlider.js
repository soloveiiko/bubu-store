import React from 'react';
import { ProductsSlider } from '../commons';

const AlsoBuySlider = ({ products, selectedCatalog }) => {
  const catalogProducts = products.filter((product) => product.catalog === selectedCatalog.name);
  const numSlides = catalogProducts.length;
  console.log(catalogProducts);
  return (
    <div className="also-buy-slider">
      <div className="also-buy-slider__container container">
        <div className="also-buy-slider__title">
          <h2 className="also-buy-slider__headline headline">З цим також купляють</h2>
        </div>
        <ProductsSlider products={catalogProducts} numSlides={numSlides} />
      </div>
    </div>
  );
};

export default AlsoBuySlider;
