import React from 'react';
import { SignIn } from '../../components';
import { logoAccent, bgLoginBottom, bgLoginTop } from './../../assets';

const SignInPage = () => {
  return (
    <div className="login-page">
      <img className="login-page__background" src={bgLoginTop} alt="background" />
      <div className="login-page__container">
        <div className="login-page__img-container img-container">
          <img src={logoAccent} alt="bubu" />
        </div>
        <h1 className="login-page__title headline">вхід</h1>
        <SignIn />
      </div>
      <img className="login-page__background" src={bgLoginBottom} alt="background" />
    </div>
  );
};

export default SignInPage;
