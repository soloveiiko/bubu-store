import React from 'react';
import Slider from 'react-slick';
import { discountList } from '../../utils/data';
import { NextArrow, PrevArrow } from '../commons';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const DiscountSlider = () => {
  const numSlides = discountList.length;

  const settings = {
    dots: true,
    infinite: numSlides > 1,
    // autoplay: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  return (
    <div className="discount-slider">
      <div className="discount-slider__container container">
        <Slider {...settings}>
          {discountList.map((slide, index) => (
            <div className="discount-slider__item" key={index}>
              <img src={slide.image} alt={slide.id} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default DiscountSlider;
