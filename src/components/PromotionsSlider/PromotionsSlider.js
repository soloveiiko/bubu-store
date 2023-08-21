import React from 'react';
import { productsList } from '../../utils/data';
import { ProductsSlider } from '../commons';

const PromotionsSlider = () => {
  const isDiscountProducts = productsList.filter((product) => product.discount.isDiscount === true);
  const numSlides = isDiscountProducts.length;

  return (
    <div className="promotion-slider">
      <div className="promotion-slider__container container">
        <div className="promotion-slider__title">
          <h2 className="promotion-slider__headline headline">Акція!</h2>
          <span className="promotion-slider__mark-title">Sale</span>
        </div>
        <ProductsSlider products={isDiscountProducts} numSlides={numSlides} />
      </div>
    </div>
  );
};

export default PromotionsSlider;
