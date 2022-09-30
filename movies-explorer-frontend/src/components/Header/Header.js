import React from "react";
import { NavLink, withRouter } from 'react-router-dom';
import Navigation from "../Navigation/Navigation";

function Header({ 
  loggedIn, 
  path,
  isNavigationOpen,
  handleNavBtnClick,
  handleNavigationClose,
  resetStates,
  resetForMoviesLink,
  resetForSavedMoviesLink,
}) {
  return (
    <>
      {loggedIn ?
        <header className={`header ${(path === "/movies" && 'header_signedup') || (path === "/saved-movies" && 'header_signedup') || (path === "/profile" && 'header_signedup')}`}>
            <NavLink to='/'
              onClick={resetStates}
              className="header__logo">
            </NavLink>
            <div className={`header__info ${loggedIn && 'header__info_signedup'}`}>
              <NavLink to="/movies"
                onClick={resetForMoviesLink}
                className={`header__link ${(path === "/movies" && 'header__link_black') || (path === "/saved-movies" && 'header__link_black') || (path === "/profile" && 'header__link_black')} ${path === "/movies" && 'header__link_selected'}`}
              >
                Фильмы
              </NavLink>
              <NavLink to="/saved-movies"
                onClick={resetForSavedMoviesLink}
                className={`header__link ${(path === "/movies" && 'header__link_black') || (path === "/saved-movies" && 'header__link_black') || (path === "/profile" && 'header__link_black')} ${path === "/saved-movies" && 'header__link_selected'}`}
              >
                Сохраненные фильмы
              </NavLink>
            </div>
            <button className={`header__nav-button ${(path === "/movies" && 'header__nav-button_loggedIn') || (path === "/saved-movies" && 'header__nav-button_loggedIn') || (path === "/profile" && 'header__nav-button_loggedIn')}`} type="button" 
              onClick={() => handleNavBtnClick()}>
            </button>
            <NavLink to="/profile"
                onClick={resetStates}
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
              <NavLink className="header__link" to='/sign-up'>Регистрация</NavLink>
              <NavLink className="header__login-button_active" to='/sign-in'>Войти</NavLink>
            </div>
        </header>
      }
      <Navigation
        path={path}
        resetStates={resetStates}
        resetForMoviesLink={resetForMoviesLink}
        resetForSavedMoviesLink={resetForSavedMoviesLink}
        handleNavigationClose={handleNavigationClose}
        isOpen={isNavigationOpen}
      />
    </>
  );
}
export default withRouter(Header);