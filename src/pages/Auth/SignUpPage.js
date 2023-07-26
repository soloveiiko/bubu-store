import React from 'react';
import { SignUp } from '../../components';
import { accentLogo, bottom, top } from '../../assets';

const SignUpPage = () => {
  return (
    <div className="login-page">
      <img className="background background-top" src={top} alt="background" />
      <div className="login-container">
        <div className="img-container">
          <img src={accentLogo} alt="bubu" />
        </div>
        <h1>реєстрація</h1>
        <SignUp />
      </div>
      <img className="background background-bottom" src={bottom} alt="background" />
    </div>
  );
};

export default SignUpPage;
