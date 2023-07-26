import React from 'react';
import { SignIn } from '../../components';
import { accentLogo, bottom, top } from './../../assets';

const SignInPage = () => {
  return (
    <div className="login-page">
      <img className="background background-top" src={top} alt="background" />
      <div className="login-container">
        <div className="img-container">
          <img src={accentLogo} alt="bubu" />
        </div>
        <h1>вхід</h1>
        <SignIn />
      </div>
      <img className="background background-bottom" src={bottom} alt="background" />
    </div>
  );
};

export default SignInPage;
