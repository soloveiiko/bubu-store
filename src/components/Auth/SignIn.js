import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Inputs, { mixField, passwordField } from '../commons/Inputs/Inputs';
import { Link, useNavigate } from 'react-router-dom';
import { getUserDataAsync } from '../../redux/auth/action';
import SocialLogin from './SocialLogin';

const SignIn = () => {
  const [credentials, setCredentials] = useState({
    [passwordField.name]: '',
    [mixField.name]: '',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inputs = [mixField, passwordField];
  const onChangeInput = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const onSubmitForm = (e) => {
    e.preventDefault();
    const inputValue = credentials[mixField.name];
    const isNumber = /^[0-9()+\s-]*$/.test(inputValue);
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputValue);
    let payload = {};
    if (isNumber) {
      payload = {
        phone: credentials[mixField.name],
        password: credentials[passwordField.name],
      };
      dispatch(getUserDataAsync(payload));
      navigate('/');
      console.log('its number');
    } else if (isEmail) {
      payload = {
        email: credentials[mixField.name],
        password: credentials[passwordField.name],
      };
      dispatch(getUserDataAsync(payload));
      navigate('/');
      console.log('its email');
    } else {
      console.log('try again');
    }
    console.log('Form submitted with values:', payload);
    setCredentials({
      [mixField.name]: '',
      [passwordField.name]: '',
    });
  };
  return (
    <>
      <form className="login-form" onSubmit={onSubmitForm}>
        {inputs.map((input, index) => (
          <Inputs key={index} {...input} value={credentials[input.name]} onChange={onChangeInput} />
        ))}
        <div className="login-form__reset-password">Забули пароль?</div>
        <button className="login-form__send-btn accent-btn">Увійти</button>
        <Link className="login-form__link white-btn" to="/signup">
          У мене немає акаунта
        </Link>
      </form>
      <div className="marker">Або</div>
      <SocialLogin />
    </>
  );
};

export default SignIn;
