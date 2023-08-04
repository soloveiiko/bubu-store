import React from 'react';
import Slider from 'react-slick';
import { NextArrow } from '../Arrows';
import { promotionalProducts } from '../../utils/data';

const PromotionsSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
  };
  const perDifference = (prevPrice, currPrice) => {
    return Math.floor(((prevPrice - currPrice) * 100) / prevPrice);
  };
  return (
    <Slider {...settings}>
      {promotionalProducts.map((el) => (
        <div key={el.id}>
          <div className="percentage-difference">{perDifference(el.prevPrice, el.currPrice)}</div>
          <img src={el.image} alt={el.name} />
          <div className="description">{el.description}</div>
          <div className="prev-price">{el.prevPrice}</div>
          <div className="curr-price">{el.currPrice}</div>
        </div>
      ))}
    </Slider>
  );
};

export default PromotionsSlider;
