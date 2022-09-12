import React from 'react';
import { Switch, NavLink, withRouter, Route, useLocation } from 'react-router-dom';

function Header({ onSignOut, loggedIn }) {
  const location = useLocation()

  return (
    <>
      {loggedIn ?
        <header className="header_signedup">
            <div className="header__logo"></div>
            <div className={`header__info ${loggedIn && 'header__info_signedup'}`}>
              <NavLink to="/sign-in"
                className={`header__link ${loggedIn && 'header__link_active header__link_active_black'}`}
              >
                Фильмы
              </NavLink>
              <NavLink to="/sign-in"
                className={`header__link ${loggedIn && 'header__link_active header__link_active_black'}`}
              >
                Сохраненные фильмы
              </NavLink>
            </div>
            <NavLink to="/sign-in"
                className={`header__login-button ${loggedIn && 'header__login-button_active header__login-button_active_signedup'}`}
              >
                <p className='header__text'>Аккаунт</p>
                <div className='header__profile-wrapper'>
                    <div className='header__profile-logo'></div>
                </div>
            </NavLink>
        </header>
        :
        <header className="header">
            <div className="header__logo"></div>
            <div className="header__info">
              <NavLink className="header__link_active" to='/sign-in'>Регистрация</NavLink>
              <NavLink className="header__login-button_active" to='/sign-up'>Войти</NavLink>
            </div>
        </header>
      }
    </>
  );
}
export default withRouter(Header);