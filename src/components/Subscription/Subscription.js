import React from 'react';
import { footerImg } from '../../assets';
import { SendButton } from '../commons';

const Subscription = () => {
  return (
    <div className="subscription">
      <div className="subscription__container container">
        <div className="subscription__block">
          <h2 className="subscription__headline headline">Отримуйте промокоди та ексклюзивні пропозиції</h2>
          <div className="subscription__input-container">
            <input type="email" placeholder="Ваш email" />
            <SendButton />
          </div>
        </div>
        <div className="subscription__img-container img-container">
          <img src={footerImg} alt="Hello" />
        </div>
      </div>
    </div>
  );
};

export default Subscription;
