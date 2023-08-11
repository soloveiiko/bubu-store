import React from 'react';

const ProductCharacteristics = ({ product }) => {
  const { producer, country, colors, sex, weight, size } = product.characteristics;

  return (
    <div>
      <div>Виробник: {producer}</div>
      <div>Країна: {country}</div>
      <div>
        Кольори:
        {Object.values(colors).map((colorValue, index) => (
          <div key={index}>{colorValue}</div>
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
  );
};

export default ProductCharacteristics;
