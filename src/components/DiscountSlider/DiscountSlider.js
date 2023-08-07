import React from 'react';
import Slider from 'react-slick';
import { discountSliderData } from '../../utils/data';
import { NextArrow, PrevArrow } from '../commons/Arrows';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const DiscountSlider = () => {
  const numSlides = discountSliderData.length;

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
    <Slider {...settings}>
      {discountSliderData.map((slide, index) => (
        <div key={index}>
          <img src={slide.image} alt={slide.id} />
        </div>
      ))}
    </Slider>
  );
};

export default DiscountSlider;
