import React from 'react';
import { Link } from 'react-router-dom';
import { addToHistory } from '../../redux/browsing-history/action';
import { useDispatch } from 'react-redux';
import { defaultImg } from '../../assets';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const perDifference = (prevPrice, currPrice) => {
    return Math.floor(((prevPrice - currPrice) * 100) / prevPrice);
  };
  const onClickDis = (product) => {
    dispatch(addToHistory(product));
    console.log('product', product);
  };
  const renderPhotos = () => {
    if (product.photos) {
      const firstColor = Object.keys(product.photos)[0];
      const imagesForColor = product.photos[firstColor];

      if (imagesForColor && imagesForColor.length > 0) {
        return (
          <div>
            <img src={imagesForColor[0]} alt={firstColor} />
          </div>
        );
      }
    } else if (product.images.length > 0) {
      return (
        <div>
          <img src={product.images[0]} alt={product.name} />
        </div>
      );
    }
    return (
      <div>
        <img src={defaultImg} alt="Product" />
      </div>
    );
  };
  return (
    <div>
      <div className="percentage-difference">
        {product.discount.isDiscount && perDifference(product.price, product.discount.price)}
      </div>
      {renderPhotos()}
      <Link to={`/product/${product.id}`} className="description" onMouseUp={() => onClickDis(product)}>
        {product.fullName}
      </Link>
      <div className="prev-price">{product.price}</div>
      <div className="curr-price">{product.discount.price}</div>
    </div>
  );
};

export default ProductItem;
