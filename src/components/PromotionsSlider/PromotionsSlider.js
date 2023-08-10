import React from 'react';
import { productsList } from '../../utils/data';
import { ProductsSlider } from '../commons';

const PromotionsSlider = () => {
  const isDiscountProducts = productsList.filter((product) => product.discount.isDiscount === true);
  const numSlides = isDiscountProducts.length;

  return (
    <div className="promotion-slider">
      <div className="title">
        <h2 className="headline">Акція!</h2>
        <span className="mark-title">Sale</span>
      </div>
      <ProductsSlider products={isDiscountProducts} numSlides={numSlides} />
    </div>
  );
};

export default PromotionsSlider;
