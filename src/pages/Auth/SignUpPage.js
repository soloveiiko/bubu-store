import React from 'react';
import { SignUp } from '../../components';
import { logoAccent, bgLoginBottom, bgLoginTop } from '../../assets';

const SignUpPage = () => {
  return (
    <div className="login-page">
      <img className="background background-top" src={bgLoginTop} alt="background" />
      <div className="login-container">
        <div className="img-container">
          <img src={logoAccent} alt="bubu" />
        </div>
        <h1>реєстрація</h1>
        <SignUp />
      </div>
      <img className="background background-bottom" src={bgLoginBottom} alt="background" />
    </div>
  );
};

export default SignUpPage;
