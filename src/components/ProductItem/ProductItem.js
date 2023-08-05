import React from 'react';
import { Link } from 'react-router-dom';
import { addToHistory } from '../../redux/browsing-history/action';
import { useDispatch } from 'react-redux';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const perDifference = (prevPrice, currPrice) => {
    return Math.floor(((prevPrice - currPrice) * 100) / prevPrice);
  };
  const onClickDis = (product) => {
    dispatch(addToHistory(product));
    console.log('product', product);
  };
  return (
    <div>
      <div className="percentage-difference">{perDifference(product.prevPrice, product.currPrice)}</div>
      <img src={product.image} alt={product.name} />
      <Link to={`/product/${product.id}`} className="description" onMouseUp={() => onClickDis(product)}>
        {product.description}
      </Link>
      <div className="prev-price">{product.prevPrice}</div>
      <div className="curr-price">{product.currPrice}</div>
    </div>
  );
};

export default ProductItem;
