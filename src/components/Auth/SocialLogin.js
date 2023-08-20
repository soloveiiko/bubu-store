import React from 'react';
import { facebookIcon, googleIcon } from '../../assets';

const SocialLogin = () => {
  return (
    <div className="social-login">
      <h3 className="social-login__title">Увійти за допомогою:</h3>
      <div className="social-login__item">
        <button className="social-login__google">
          <img src={googleIcon} alt="google" />
        </button>
        <button className="social-login__facebook">
          <img src={facebookIcon} alt="facebook" />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
