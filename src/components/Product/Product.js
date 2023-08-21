import React, { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { favoriteAccent, comparisonGray, cart, location } from '../../assets';
import Slider from 'react-slick';
import PerDifference from '../commons/PerDifference/PerDifference';
import { Link } from 'react-router-dom';
import { MoreActions, NextArrow, PrevArrow } from '../commons';

const Product = ({ product, comments, isGreater }) => {
  const defaultSex = Object.keys(product.characteristics.sex)[0];
  const defaultColor = Object.keys(product.characteristics.colors)[0];
  const [selectedSex, setSelectedSex] = useState(product.characteristics.sex[defaultSex]);
  const [selectedColor, setSelectedColor] = useState(product.characteristics.colors[defaultColor]);
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
      <div className="product__container container">
        <div className="product__block_top">
          <h2 className="product__name">{product.fullName}</h2>
          <div className="product__action">
            <div className="product__like">
              <img src={favoriteAccent} alt="Like" />У вибране
            </div>
            <div className="product__compare">
              <img src={comparisonGray} alt="Like" />
              Порівняти
            </div>
          </div>
        </div>
        <div className="product__about">
          <div className="product__available-container">
            {product.isAvailable ? (
              <span className="product__available">В наявності </span>
            ) : (
              <span className="product__not-available">Немає</span>
            )}
          </div>
          <div className="product__code">Код: {product.code}</div>
          <div className="product__comments">
            4.5 <AiFillStar />
            {isGreater ? <span>{comments.length} відгуків</span> : <span>({comments.length})</span>}
          </div>
        </div>
        <Slider {...settings}>
          {product.photos.blue.map((img, index) => (
            <div className="product__img-container img-container" key={index}>
              <img src={img} alt="Item" />
            </div>
          ))}
        </Slider>
        <div className="product__information product-information">
          <div className="product-information__colors">
            <h5 className="product-information__title">Колір:</h5>
            <div className="product-information__colors-list">
              {Object.values(colors).map((color, index) => (
                <button
                  key={index}
                  className={`product-information__color-btn ${color.class} ${
                    color === selectedColor ? 'selected' : ''
                  }`}
                  onClick={() => setSelectedColor(color)}
                >
                  {color.name}
                </button>
              ))}
            </div>
          </div>
          <div className="product-information__sex">
            <h5 className="product-information__title">Стать:</h5>
            <div className="product-information__sex-list">
              {Object.values(sex).map((sexValue, index) => (
                <button
                  key={index}
                  className={`white-btn product-information__sex-btn  ${sexValue === selectedSex ? 'selected' : ''}`}
                  onClick={() => setSelectedSex(sexValue)}
                >
                  {sexValue}
                </button>
              ))}
            </div>
          </div>
          <div className="product-information__price">
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
          <div className="product__buy">
            <button className="product__in-basket accent-btn">
              <img src={cart} alt="Купити" />
              Купити
            </button>
            <button className="product__in-one-click white-btn">Купити в 1 клік</button>
          </div>
          <div className="product__pick-up-today">
            <div className="product__subtitle subtitle">Ви з Одеси? Заберіть товар у магазині</div>
            <div className="product__location">
              <img src={location} alt="Location" />
              <div className="product__address">Одеса, вул. Михайлівська, 8 (10:00-19:00 щодня)</div>
            </div>
            <div className="product__pick-up-today-btn">
              <MoreActions title="Забрати сьогодні" />
            </div>
          </div>
          <div className="product__additional-information">
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
