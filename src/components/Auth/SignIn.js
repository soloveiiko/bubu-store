import React, { useState } from 'react';
import Inputs, { mixField, passwordField } from '../Inputs';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [credentials, setCredentials] = useState({
    [passwordField.name]: '',
    [mixField.name]: '',
  });

  const inputs = [mixField, passwordField];
  const onChangeInput = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const onSubmitForm = (e) => {
    e.preventDefault();
    const inputValue = credentials[mixField.name];
    const isNumber = /^[0-9()+\s-]*$/.test(inputValue);
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputValue);

    if (isNumber) {
      console.log('its number');
    } else if (isEmail) {
      console.log('its email');
    } else {
      console.log('try again');
    }
    setCredentials({
      [mixField.name]: '',
      [passwordField.name]: '',
    });
    console.log('Form submitted with values:');
    console.log(credentials);
  };
  return (
    <>
      <form className="login-form" onSubmit={onSubmitForm}>
        {inputs.map((input, index) => (
          <Inputs key={index} {...input} value={credentials[input.name]} onChange={onChangeInput} />
        ))}
        <div className="reset-password">Забули пароль?</div>
        <button>Send</button>
        <br />
        <Link to="/signup">У мене немає акаунта</Link>
      </form>
      <div>
        <div>Або</div>
        <h3>Увійти за допомогою:</h3>
        <button>
          <img src="" alt="google" />
        </button>
        <button>
          <img src="" alt="facebook" />
        </button>
      </div>
    </>
  );
};

export default SignIn;
