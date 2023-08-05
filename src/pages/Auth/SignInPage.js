import React from 'react';
import { SignIn } from '../../components';
import { logoAccent, bgLoginBottom, bgLoginTop } from './../../assets';

const SignInPage = () => {
  return (
    <div className="login-page">
      <img className="background background-top" src={bgLoginTop} alt="background" />
      <div className="login-container">
        <div className="img-container">
          <img src={logoAccent} alt="bubu" />
        </div>
        <h1>вхід</h1>
        <SignIn />
      </div>
      <img className="background background-bottom" src={bgLoginBottom} alt="background" />
    </div>
  );
};

export default SignInPage;
