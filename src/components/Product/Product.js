import React, { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { favoriteAccent, comparisonGray, cart, location } from '../../assets';
import Slider from 'react-slick';
import PerDifference from '../commons/PerDifference/PerDifference';
import { Link } from 'react-router-dom';
import { NextArrow, PrevArrow } from '../commons';

const Product = ({ product, comments }) => {
  const [selectedSex, setSelectedSex] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const settings = {
    customPaging: function (i) {
      return (
        <button type="button" className="slider-button">
          <img src={product.photos.blue[i]} alt={`Product ${i}`} />
        </button>
      );
    },
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  const { colors, sex } = product.characteristics;

  return (
    <div className="product">
      <div className="container">
        <div className="product-action">
          <h2 className="product-name">{product.fullName}</h2>
          <div className="like-product">
            <img src={favoriteAccent} alt="Like" />У вибране
          </div>
          <div className="compare-product">
            <img src={comparisonGray} alt="Like" />
            Порівняти
          </div>
        </div>
        <div className="about-product">
          <div className="available-container">
            {product.isAvailable ? (
              <span className="available">В наявності </span>
            ) : (
              <span className="not-available">Немає</span>
            )}
          </div>
          <div className="product-code">Код: {product.code}</div>
          <div className="comments">
            4.5 <AiFillStar />
            <span>({comments.length})</span>
          </div>
        </div>
        <Slider {...settings}>
          {product.photos.blue.map((el, index) => (
            <div key={index}>
              <img src={el} alt="Item" />
            </div>
          ))}
        </Slider>
        <div className="product-information">
          <div className="colors">
            <h5 className="title">Колір:</h5>
            <div className="colors-list">
              {Object.values(colors).map((color, index) => (
                <button
                  key={index}
                  className={`color ${color.class} ${color === selectedColor ? 'selected' : ''}`}
                  onClick={() => setSelectedColor(color)}
                >
                  {color.name}
                </button>
              ))}
            </div>
          </div>
          <div className="sex">
            <h5 className="title">Стать:</h5>
            <div className="sex-list">
              {Object.values(sex).map((sexValue, index) => (
                <button
                  key={index}
                  className={`sex-button ${sexValue === selectedSex ? 'selected' : ''}`}
                  onClick={() => setSelectedSex(sexValue)}
                >
                  {sexValue}
                </button>
              ))}
            </div>
          </div>
          <div className="price">
            {product.discount.isDiscount ? (
              <>
                <span className="prev-price">
                  {product.price} <span>грн</span>
                </span>
                <span className="curr-price">
                  {product.discount.price} <span>грн</span>
                </span>
                <PerDifference product={product} />
              </>
            ) : (
              <>
                <span className="origin-price">{product.price} грн</span>
              </>
            )}
          </div>
          <div className="buy-product">
            <button className="in-basket">
              <img src={cart} alt="Купити" />
              Купити
            </button>
            <button className="in-one-click">Купити в 1 клік</button>
          </div>
          <div className="pick-up-today">
            <div className="in-store">Ви з Одеси? Заберіть товар у магазині</div>
            <div className="location">
              <img src={location} alt="Location" />
              <div className="address">Одеса, вул. Михайлівська, 8 (10:00-19:00 щодня)</div>
            </div>
            <div className="pick-up-today-button">
              <Link to="#">Забрати сьогодні</Link>
            </div>
          </div>
          <div className="additional-information">
            <Link to="#">Оплата і доставка</Link>
            <Link to="#">Повернення і обмін</Link>
            <Link to="#">Контакти</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
