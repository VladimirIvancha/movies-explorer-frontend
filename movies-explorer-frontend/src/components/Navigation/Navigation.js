import React, { useState, useContext } from "react";
import { Switch, NavLink, Route, useLocation } from 'react-router-dom';

function Navigation({  
    path,
    onClose,
    isOpen=true
}) {
  const location = useLocation()
  const classNameNavigation = `navigation ${isOpen && 'navigation_is-opened'}`

  return (
    <div className={classNameNavigation}>
        <div className="navigation__container">
            <button className="navigation__close-btn" type="button" onClick={onClose} ></button>
            <NavLink className="navigation__main-link" to='/'></NavLink>
            <NavLink to="/movies"
                className={`header__link header__link_black ${path === "/movies" && 'header__link_selected'}`}
                >
                Фильмы
                </NavLink>
            <NavLink to="/saved-movies"
                className={`header__link header__link_black ${path === "/saved-movies" && 'header__link_selected'}`}
                >
                Сохраненные фильмы
                </NavLink>
            <NavLink to="/profile"
                className={`header__login-button header__login-button_active header__login-button_active_signedup`}
                >
                <p className='header__text'>Аккаунт</p>
                <div className='header__profile-wrapper'>
                    <div className='header__profile-logo'></div>
                </div>
            </NavLink>
        </div>
    </div>
  );
}
export default Navigation;