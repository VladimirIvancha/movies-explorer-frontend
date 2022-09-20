import React, { useState, useContext } from "react";
import { Switch, NavLink, Route, useLocation } from 'react-router-dom';

function Navigation({  
    path,
    onClose,
    isOpen,
}) {
  const location = useLocation()
  const classNameNavigation = `navigation ${isOpen && 'navigation_is-opened'}`

  return (
    <div className={classNameNavigation}>
        <div className="navigation__container">
            <button className="navigation__close-btn" type="button" onClick={onClose} ></button>
            <NavLink to='/' 
                className="navigation__main-link" 
                onClick={onClose}
                >
                    Главная
                </NavLink>
            <NavLink to="/movies"
                className={`header__link header__link_black header__link_nav ${path === "/movies" && 'header__link_selected'}`}
                onClick={onClose}
                >
                    Фильмы
                </NavLink>
            <NavLink to="/saved-movies"
                className={`header__link header__link_black header__link_nav ${path === "/saved-movies" && 'header__link_selected'}`}
                onClick={onClose}
                >
                    Сохраненные фильмы
                </NavLink>
            <NavLink to="/profile"
                className='navigation__login-button'
                onClick={onClose}
                >
                <p className='navigation__text'>Аккаунт</p>
                <div className='navigation__profile-wrapper'>
                    <div className='navigation__profile-logo'></div>
                </div>
            </NavLink>
        </div>
    </div>
  );
}
export default Navigation;