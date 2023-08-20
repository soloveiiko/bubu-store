import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToHistory } from '../../../redux/browsing-history/action';
import { useDispatch } from 'react-redux';
import { comparisonAccent, defaultImg, favoriteAccent } from '../../../assets';
import PerDifference from '../PerDifference/PerDifference';

const ProductItem = ({ product }) => {
  const [hover, setHover] = useState(0);
  const [greaterThan1000, setGreaterThan1000] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const handleResize = () => {
      setGreaterThan1000(window.innerWidth >= 1000);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const onClickDis = (product) => {
    dispatch(addToHistory(product));
  };
  const renderPhotos = () => {
    if (product.photos) {
      const firstColor = Object.keys(product.photos)[0];
      const imagesForColor = product.photos[firstColor];

      if (imagesForColor && imagesForColor.length > 0) {
        return (
          <div className="img-container">
            <img src={imagesForColor[0]} alt={firstColor} />
          </div>
        );
      }
    } else if (product.images.length > 0) {
      return (
        <div className="img-container">
          <img src={product.images[0]} alt={product.name} />
        </div>
      );
    }
    return (
      <div className="img-container">
        <img src={defaultImg} alt="Product" />
      </div>
    );
  };
  const handleMouseEnter = () => {
    if (product.isAvailable) {
      setHover(true);
    }
  };

  const handleMouseLeave = () => {
    setHover(false);
  };
  return (
    <div className="product-item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {product.discount.isDiscount && <PerDifference product={product} />}
      <Link to={`/product/${product.id}`} className="product-link" onMouseUp={() => onClickDis(product)}>
        {renderPhotos()}
        <div className="full-name">{product.fullName}</div>
      </Link>
      {product.discount.isDiscount ? (
        <div className="prices">
          <div className="prev-price">
            {product.price} <span>грн</span>
          </div>
          <div className="curr-price">
            {product.discount.price} <span>грн</span>
          </div>
        </div>
      ) : (
        <div className="price">
          {product.price} <span>грн</span>
        </div>
      )}
      {hover && product.isAvailable && greaterThan1000 ? (
        <div className="action-container">
          <button className="buy-product accent-btn">Купити</button>
          <div>
            <img src={favoriteAccent} alt="Like" />
          </div>
          <div>
            <img src={comparisonAccent} alt="Comparison" />
          </div>
        </div>
      ) : (
        ''
      )}
      {!product.isAvailable && <div className="not-available">Немає в наявності</div>}
    </div>
  );
};

export default ProductItem;
