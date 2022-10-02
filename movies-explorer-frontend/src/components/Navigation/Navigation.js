import React from "react";
import { NavLink } from 'react-router-dom';

function Navigation({  
    path,
    resetStates,
    handleNavigationClose,
    isOpen,
}) 
{
  const classNameNavigation = `navigation ${isOpen && 'navigation_is-opened'}`

  return (
    <div className={classNameNavigation}>
        <div className="navigation__container">
            <div className="navigation__wrapper">
                <button className="navigation__close-btn" type="button" onClick={handleNavigationClose}></button>
                <NavLink to='/' 
                    className="navigation__main-link" 
                    onClick={resetStates}
                >
                    Главная
                </NavLink>
                <NavLink to="/movies"
                    className={`header__link header__link_black header__link_nav ${path === "/movies" && 'header__link_selected'}`}
                    onClick={resetStates}
                >
                    Фильмы
                </NavLink>
                <NavLink to="/saved-movies"
                    className={`header__link header__link_black header__link_nav ${path === "/saved-movies" && 'header__link_selected'}`}
                    onClick={resetStates}
                >
                    Сохраненные фильмы
                </NavLink>
            </div>
            <NavLink to="/profile"
                className='navigation__login-button'
                onClick={resetStates}
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