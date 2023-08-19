import React from 'react';
import { Link } from 'react-router-dom';

const BasketNotification = () => {
  return (
    <div className="form-container">
      <div className="basket-notification">
        <h4 className="basket-notification__title">Товар додано до кошику</h4>
        <button className="basket-notification__close-btn">Продовжити покупки</button>
        <Link className="basket-notification__go-basket" to="#">
          Перейти в кошик
        </Link>
      </div>
    </div>
  );
};

export default BasketNotification;
