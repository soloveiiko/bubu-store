import React from 'react';

const Product = (props) => {
  return (
    <div>
      <div>
        <h2 className="product-name">name: {props.name}</h2>
        <div>У вибране</div>
        <div>Порівняти</div>
      </div>
      <div>
        <div>В наявності | Немає в наявності</div>
        <div>Код</div>
        <div>Відгуки</div>
      </div>
      <div>
        <div>Images Slider</div>
        <div>Color</div>
        <div>Sex</div>
        <div>Price</div>
        <div>Buy</div>
        <div>Proposition</div>
        <div>More information</div>
      </div>
    </div>
  );
};

export default Product;
