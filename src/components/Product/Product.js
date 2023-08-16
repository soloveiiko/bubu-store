import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { favoriteAccent, comparisonGray, cart, location } from '../../assets';
import Slider from 'react-slick';
import PerDifference from '../commons/PerDifference/PerDifference';
import { Link } from 'react-router-dom';

const Product = ({ product, comments }) => {
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
  };
  return (
    <div className="product">
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
      <div className="product-information">
        <Slider {...settings}>
          {product.photos.blue.map((el, index) => (
            <div key={index}>
              <img src={el} alt="Item" />
            </div>
          ))}
        </Slider>
        <div className="colors">
          <h5 className="title">Колір:</h5>
          {product.colors.map((color, index) => (
            <button key={index} className={color}>
              {color}
            </button>
          ))}
        </div>
        <div>
          <h5 className="title">Стать:</h5>
          {product.sex.map((sex, index) => (
            <button key={index}>{sex}</button>
          ))}
        </div>
        <div>
          {product.discount.isDiscount ? (
            <>
              <span>{product.price} грн</span>
              <span>{product.discount.price} грн</span>
              <PerDifference product={product} />
            </>
          ) : (
            <>
              <span>{product.price} грн</span>
            </>
          )}
        </div>
        <div>
          <button>
            <img src={cart} alt="Купити" />
            Купити
          </button>
          <button>Купити в один клік</button>
        </div>
        <div>
          <div>Ви з Одеси? Заберіть товар у магазині</div>
          <div>
            <img src={location} alt="Location" />
            Одеса, вул. Михайлівська, 8 (10:00-19:00 щодня)
          </div>
          <div>
            <Link to="#">Забрати сьогодні</Link>
          </div>
        </div>
        <div>
          <Link to="#">Оплата і доставка</Link>
          <Link to="#">Повернення і обмін</Link>
          <Link to="#">Контакти</Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
