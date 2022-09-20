import React, { useState } from "react";
import { NavLink, withRouter, useLocation } from 'react-router-dom';
import Navigation from "../Navigation/Navigation";

function Header({ loggedIn, path }) {
  const location = useLocation()
  const [isNavigationOpen, setisNavigationOpen] = useState(false);

  function handleNavBtnClick() {
    setisNavigationOpen(true);
    console.log(isNavigationOpen);
  }

  function closeAllPopups() {
    setisNavigationOpen(false);
  }

  return (
    <>
      {loggedIn ?
        <header className="header_signedup">
            <NavLink className="header__logo" to='/'></NavLink>
            <div className={`header__info ${loggedIn && 'header__info_signedup'}`}>
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
            </div>
            <button className="header__nav-button" type="button" onClick={() => handleNavBtnClick()}></button>
            <NavLink to="/profile"
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
            <NavLink className="header__logo" to='/'></NavLink>
            <div className="header__info">
              <NavLink className="header__link" to='/sign-in'>Регистрация</NavLink>
              <NavLink className="header__login-button_active" to='/sign-up'>Войти</NavLink>
            </div>
        </header>
      }
      <Navigation
            path={path}
            onClose={closeAllPopups}
            isOpen={isNavigationOpen}
        />
    </>
  );
}
export default withRouter(Header);