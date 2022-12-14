import React from "react";
import { Link, NavLink } from "react-router-dom";

function LoginRegForm({ 
  title,
  formsName,
  buttonText,
  onSubmit,
  disabled,
  children,
}) {
  return (
    <>
      <article className="loginregform">
        <NavLink className="header__logo header__logo_loginreg" to='/'></NavLink>
        <h2 className="loginregform__title">{title}</h2>
         {children}
      </article>
      <article className="loginregform__wrapper">
        <button 
          className={`loginregform__button ${disabled && 'loginregform__button_disabled'}`} 
          type="submit" 
          onClick={onSubmit}
          disabled={disabled}
        >
          {buttonText}
        </button>
        {formsName === "register" ?          
          <>
            {
              <Link className="loginregform__link" to="/sign-in">
                <p className="loginregform__link-text">Уже зарегистрированы?</p><p className="loginregform__link-text loginregform__link-text_red">Войти</p>
              </Link>
            }
          </>
          :
          <>
            {
              <Link className="loginregform__link" to="/sign-up">
                <p className="loginregform__link-text">Еще не зарегистрированы?</p><p className="loginregform__link-text loginregform__link-text_red">Регистрация</p> 
              </Link>
            }
          </>
        }
      </article> 
  </>
  );
}

export default LoginRegForm;
