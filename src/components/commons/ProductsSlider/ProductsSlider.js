import React from 'react';
import Slider from 'react-slick';
import { NextArrow, ProductItem } from '../../commons';
const ProductsSlider = ({ products, numSlides }) => {
  const settings = {
    speed: 500,
    slidesToShow: 5,
    infinite: numSlides > 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          infinite: numSlides > 4,
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          infinite: numSlides > 3,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 479,
        settings: {
          infinite: numSlides > 2,
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="product-slider">
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id}>
            <ProductItem product={product} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductsSlider;
