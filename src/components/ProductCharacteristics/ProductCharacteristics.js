import React, { useState } from 'react';
import { RiArrowUpSLine } from 'react-icons/ri';

const ProductCharacteristics = ({ product, isTablet }) => {
  const [isOpen, setIsOpen] = useState(true);
  const { producer, country, colors, sex, weight, size } = product.characteristics;
  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={`product-characteristics ${isOpen ? 'open' : ''}`}>
      <div className="title" onClick={toggleIsOpen}>
        <h2 className="headline">Характеристики</h2>
        {isTablet && <RiArrowUpSLine />}
      </div>
      <div className="characteristics-list">
        <div className="characteristics-item producer">
          <span className="characteristics-title">Виробник:</span>

          <span className="characteristics-value">{producer}</span>
        </div>
        <div className="characteristics-item country">
          <span className="characteristics-title">Країна:</span>
          <span className="characteristics-value">{country}</span>
        </div>
        <div className="characteristics-item colors">
          <span className="characteristics-title">Колір:</span>
          <span className="characteristics-value">{Object.values(colors)[0].name}</span>
        </div>
        <div className="characteristics-item sex">
          <span className="characteristics-title">Стать:</span>
          <span className="characteristics-value">
            {Object.values(sex).map((sexValue, index) => (
              <div key={index}>{sexValue}</div>
            ))}
          </span>
        </div>
        <div className="characteristics-item weight">
          <span className="characteristics-title">Вага:</span>
          <span className="characteristics-value">{weight}</span>
        </div>
        <div className="characteristics-item size">
          <span className="characteristics-title">Розмір:</span>
          <span className="characteristics-value">{size}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCharacteristics;
