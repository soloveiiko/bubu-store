import React, { useState } from 'react';
import { RiArrowUpSLine } from 'react-icons/ri';

const ProductCharacteristics = ({ product, isTablet }) => {
  const [isOpen, setIsOpen] = useState(true);
  const { producer, country, colors, sex, weight, size } = product.characteristics;
  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={`product-characteristics ${isTablet && isOpen ? 'open' : ''}`}>
      <div className="product-characteristics__main-title" onClick={toggleIsOpen}>
        <h2 className="product-characteristics__headline headline">Характеристики</h2>
        {isTablet && <RiArrowUpSLine />}
      </div>
      <div className="product-characteristics__list">
        <div className="product-characteristics__item producer-item">
          <span className="product-characteristics__title">Виробник:</span>

          <span className="product-characteristics__value">{producer}</span>
        </div>
        <div className="product-characteristics__item country-item">
          <span className="product-characteristics__title">Країна:</span>
          <span className="product-characteristics__value">{country}</span>
        </div>
        <div className="product-characteristics__item colors-item">
          <span className="product-characteristics__title">Колір:</span>
          <span className="product-characteristics__value">{Object.values(colors)[0].name}</span>
        </div>
        <div className="product-characteristics__item sex-item">
          <span className="product-characteristics__title">Стать:</span>
          <span className="product-characteristics__value">
            {Object.values(sex).map((sexValue, index) => (
              <div key={index}>{sexValue}</div>
            ))}
          </span>
        </div>
        <div className="product-characteristics__item weight-item">
          <span className="product-characteristics__title">Вага:</span>
          <span className="product-characteristics__value">{weight}</span>
        </div>
        <div className="product-characteristics__item size-item">
          <span className="product-characteristics__title">Розмір:</span>
          <span className="product-characteristics__value">{size}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCharacteristics;
