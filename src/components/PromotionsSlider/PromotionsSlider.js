import React from 'react';
import Slider from 'react-slick';
import { NextArrow } from '../Arrows';
import { promotionalProducts } from '../../utils/data';
import ProductItem from '../ProductItem';

const PromotionsSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
  };
  return (
    <Slider {...settings}>
      {promotionalProducts.map((product) => (
        <div key={product.id}>
          <ProductItem product={product} />
        </div>
      ))}
    </Slider>
  );
};

export default PromotionsSlider;
