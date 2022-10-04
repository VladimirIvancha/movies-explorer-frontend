import React from "react";
import { NavLink, withRouter } from 'react-router-dom';
import Navigation from "../Navigation/Navigation";

function Header({ 
  loggedIn, 
  path,
  isNavigationOpen,
  handleNavBtnClick,
  closeAllPopups,
}) {
  return (
    <>
      {loggedIn ?
        <header className={`header ${(path === "/movies" && 'header_signedup') || (path === "/saved-movies" && 'header_signedup') || (path === "/profile" && 'header_signedup')}`}>
            <NavLink to='/'
              onClick={closeAllPopups}
              className="header__logo">
            </NavLink>
            <div className={`header__info ${loggedIn && 'header__info_signedup'}`}>
              <NavLink to="/movies"
                onClick={closeAllPopups}
                className={`header__link ${(path === "/movies" && 'header__link_black') || (path === "/saved-movies" && 'header__link_black') || (path === "/profile" && 'header__link_black')} ${path === "/movies" && 'header__link_selected'}`}
              >
                Фильмы
              </NavLink>
              <NavLink to="/saved-movies"
                onClick={closeAllPopups}
                className={`header__link ${(path === "/movies" && 'header__link_black') || (path === "/saved-movies" && 'header__link_black') || (path === "/profile" && 'header__link_black')} ${path === "/saved-movies" && 'header__link_selected'}`}
              >
                Сохраненные фильмы
              </NavLink>
            </div>
            <button className={`header__nav-button ${(path === "/movies" && 'header__nav-button_loggedIn') || (path === "/saved-movies" && 'header__nav-button_loggedIn') || (path === "/profile" && 'header__nav-button_loggedIn')}`} type="button" 
              onClick={() => handleNavBtnClick()}>
            </button>
            <NavLink to="/profile"
                onClick={closeAllPopups}
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