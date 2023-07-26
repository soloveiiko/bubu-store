import React, { useState } from 'react';
import Inputs, { usernameField, numberField, emailField, passwordField } from '../Inputs';
import { Link } from 'react-router-dom';
const SignUp = () => {
  const [credentials, setCredentials] = useState({
    [usernameField.name]: '',
    [numberField.name]: '',
    [emailField.name]: '',
    [passwordField.name]: '',
  });

  const inputs = [usernameField, numberField, emailField, passwordField];
  const onChangeInput = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const onSubmitForm = (e) => {
    e.preventDefault();
    setCredentials({
      [usernameField.name]: '',
      [numberField.name]: '',
      [emailField.name]: '',
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
        <button>Send</button>
        <br />
        <Link to="/signin">У мене є акаунт</Link>
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

export default SignUp;
