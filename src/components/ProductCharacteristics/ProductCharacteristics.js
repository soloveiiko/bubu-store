import React from 'react';

const ProductCharacteristics = ({ product }) => {
  const { producer, country, colors, sex, weight, size } = product.characteristics;

  return (
    <div className="product-characteristics">
      <div className="container">
        <div className="characteristics-list">
          <div>Виробник: {producer}</div>
          <div>Країна: {country}</div>
          <div>
            Кольори:
            {Object.values(colors).map((colorValue, index) => (
              <div key={index}>{colorValue.name}</div>
            ))}
          </div>
          <div>
            Стать:
            {Object.values(sex).map((sexValue, index) => (
              <div key={index}>{sexValue}</div>
            ))}
          </div>
          <div>Вага: {weight}</div>
          <div>Розмір: {size}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCharacteristics;
