import React from 'react';
import { default1, default2 } from '../../assets';

const ProductDescription = ({ product }) => {
  return (
    <div className="description">
      {product.description ? (
        <>{product.description}</>
      ) : (
        <>
          <div>
            Ключові особливості колекції m/type PRO зосереджені на зручність для батьків і комфорт для дітей. Ця модель
            дозволяє однаково насолоджуватися прогулянками міськими вуличками і лісовими стежками.
          </div>
          <div>
            <img src={default1} alt="Default" />
          </div>
          <div>
            Легке зняття люльки. Для цього досить і однієї руки. Адже система пам'яті адаптерів буде утримувати кнопки
            натиснутими, поки люльку не знімуть.
          </div>
          <div>
            <img src={default2} alt="Default" />
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDescription;
