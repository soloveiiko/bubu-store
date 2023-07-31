import React, { useState } from 'react';
import Inputs, { emailField, nameField, numberField, passwordField } from '../Inputs';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signUpUserAsync } from '../../redux/auth/action';

const SignUp = () => {
  const [credentials, setCredentials] = useState({
    [nameField.name]: '',
    [numberField.name]: '',
    [emailField.name]: '',
    [passwordField.name]: '',
  });
  const dispatch = useDispatch();
  const inputs = [nameField, numberField, emailField, passwordField];
  const onChangeInput = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const onSubmitForm = (e) => {
    e.preventDefault();
    setCredentials({
      [nameField.name]: '',
      [numberField.name]: '',
      [emailField.name]: '',
      [passwordField.name]: '',
    });
    const payload = {
      name: credentials[nameField.name],
      phone: credentials[numberField.name],
      email: credentials[emailField.name],
      password: credentials[passwordField.name],
    };
    dispatch(signUpUserAsync(payload));
    console.log('Form submitted with values:', payload);
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
