import React, { useState } from 'react';
import Inputs, { emailField, nameField, numberField, passwordField } from '../commons/Inputs/Inputs';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signUpUserAsync } from '../../redux/auth/action';
import SocialLogin from './SocialLogin';

const SignUp = () => {
  const [credentials, setCredentials] = useState({
    [nameField.name]: '',
    [numberField.name]: '',
    [emailField.name]: '',
    [passwordField.name]: '',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    navigate('/');
    console.log('Form submitted with values:', payload);
  };
  return (
    <>
      <form className="login-form" onSubmit={onSubmitForm}>
        {inputs.map((input, index) => (
          <Inputs key={index} {...input} value={credentials[input.name]} onChange={onChangeInput} />
        ))}
        <button className="login-form__send-btn accent-btn">Зареєструватись</button>
        <Link className="login-form__link white-btn" to="/signin">
          У мене є акаунт
        </Link>
      </form>
      <SocialLogin />
    </>
  );
};

export default SignUp;
