import React from 'react';
import { footerImg } from '../../assets';
import { FiArrowRight } from 'react-icons/fi';

const Subscription = () => {
  return (
    <div className="subscription">
      <div className="main-block">
        <h2 className="headline">Отримуйте промокоди та ексклюзивні пропозиції</h2>
        <div className="input-container">
          <input type="email" placeholder="Ваш email" />
          <button className="btn-container">
            <FiArrowRight />
          </button>
        </div>
      </div>
      <div className="img-container">
        <img src={footerImg} alt="Hello" />
      </div>
    </div>
  );
};

export default Subscription;
