import React, { useState } from 'react';
import { default1, default2 } from '../../assets';
import { RiArrowUpSLine } from 'react-icons/ri';
import { MoreDetails } from '../commons';

const ProductDescription = ({ product, isTablet }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={`description ${isOpen ? 'open' : ''}`}>
      <div className="title" onClick={toggleIsOpen}>
        <h2 className="headline">Опис</h2>
        {isTablet && <RiArrowUpSLine />}
      </div>
      {product.description.length > 0 ? (
        <>{product.description}</>
      ) : (
        <div className="description-list">
          <div className="text">
            Ключові особливості колекції m/type PRO зосереджені на зручність для батьків і комфорт для дітей. Ця модель
            дозволяє однаково насолоджуватися прогулянками міськими вуличками і лісовими стежками.
          </div>
          <div className="img-container">
            <img src={default1} alt="Default" />
          </div>
          <div className="text">
            Легке зняття люльки. Для цього досить і однієї руки. Адже система пам'яті адаптерів буде утримувати кнопки
            натиснутими, поки люльку не знімуть.
          </div>
          <div className="img-container">
            <img src={default2} alt="Default" />
          </div>
          <MoreDetails />
        </div>
      )}
    </div>
  );
};

export default ProductDescription;
