import React, { useState } from 'react';
import { RiArrowUpSLine } from 'react-icons/ri';

const ProductCharacteristics = ({ product, isTablet }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { producer, country, colors, sex, weight, size } = product.characteristics;
  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="product-characteristics">
      <div className="title" onClick={toggleIsOpen}>
        <h2 className="headline">Характеристики</h2>
        {isTablet && <RiArrowUpSLine />}
      </div>
      <div className={`characteristics-list ${isOpen ? 'open' : ''}`}>
        <div className="characteristics-item producer">Виробник: {producer}</div>
        <div className="characteristics-item country">Країна: {country}</div>
        <div className="characteristics-item colors">
          Кольори:
          {Object.values(colors).map((colorValue, index) => (
            <div key={index}>{colorValue.name}</div>
          ))}
        </div>
        <div className="characteristics-item sex">
          Стать:
          {Object.values(sex).map((sexValue, index) => (
            <div key={index}>{sexValue}</div>
          ))}
        </div>
        <div className="characteristics-item weight">Вага: {weight}</div>
        <div className="characteristics-item size">Розмір: {size}</div>
      </div>
    </div>
  );
};

export default ProductCharacteristics;
