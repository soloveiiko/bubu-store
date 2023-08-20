import React from 'react';
import { SignUp } from '../../components';
import { logoAccent, bgLoginBottom, bgLoginTop } from '../../assets';

const SignUpPage = () => {
  return (
    <div className="login-page">
      <img className="login-page__background" src={bgLoginTop} alt="background" />
      <div className="login-page__container">
        <div className="login-page__img-container img-container">
          <img src={logoAccent} alt="bubu" />
        </div>
        <h1 className="login-page__title headline">реєстрація</h1>
        <SignUp />
      </div>
      <img className="login-page__background" src={bgLoginBottom} alt="background" />
    </div>
  );
};

export default SignUpPage;
