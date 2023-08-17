import React from 'react';

const PerDifference = ({ product }) => {
  const perDifference = (prevPrice, currPrice) => {
    return Math.floor(((prevPrice - currPrice) * 100) / prevPrice);
  };
  return <div className="percentage-difference">-{perDifference(product.price, product.discount.price)}%</div>;
};

export default PerDifference;
