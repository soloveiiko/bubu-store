import React from 'react';
import { footerImg } from '../../assets';
import { SendButton } from '../commons';

const Subscription = () => {
  console.log('visible');
  return (
    <div className="subscription">
      <div className="container">
        <div className="main-block">
          <h2 className="headline">Отримуйте промокоди та ексклюзивні пропозиції</h2>
          <div className="input-container">
            <input type="email" placeholder="Ваш email" />
            <SendButton />
          </div>
        </div>
        <div className="img-container">
          <img src={footerImg} alt="Hello" />
        </div>
      </div>
    </div>
  );
};

export default Subscription;
