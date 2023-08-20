import React, { useEffect } from 'react';
import { user } from '../../../assets';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDataAsync, setAuthStatus } from '../../../redux/auth/action';

const UserPanel = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const userLogged = localStorage.getItem('user');
    if (userLogged) {
      dispatch(setAuthStatus(true));
      dispatch(getUserDataAsync());
    }
  }, [dispatch]);
  const logoutClick = () => {
    localStorage.removeItem('user');
    dispatch(setAuthStatus(false));
    navigate('/');
  };
  return (
    <div className="user-panel">
      <img src={user} alt="login" />
      {!isAuth ? (
        <Link className="user-panel__profile" to="/signin">
          Вхід
        </Link>
      ) : (
        <div>
          <Link className="user-panel__profile" to="/profile">
            Кабінет
          </Link>
          <button className="user-panel__logout" onClick={logoutClick}>
            Log Out
          </button>
        </div>
      )}
    </div>
  );
};

export default UserPanel;
