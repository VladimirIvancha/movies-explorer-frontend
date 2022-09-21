import React, { useState, useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { NavLink } from 'react-router-dom';

function Profile({ onRegister, onSignOut }) {
  const [name, setName] = useState("Владимир");
  const [email, setEmail] = useState("Wil@mail.ru");
  const [errorInputEmail, setErrorInputEmail] = useState({
    isValid: true,
    errorMessage: "",
  });
  const [isUserUseInputEmail, setIsUserUseInputEmail] = useState(false);
  const [isEditProfileActive, setIsEditProfileActive] = useState(true);
  const [isInputDisabled, setIsInputDisabled] = useState(true);
  const [isInputRequired, setIsInputRequired] = useState(false);

  function handleChange(e) {
    const { value } = e.target;
    (e.target.name === "email") ? setEmail(value) : setName(value);
  }

  function handleEditProfileClick() {
    setIsEditProfileActive(false);
    setIsInputDisabled(false);
    setIsInputRequired(true)
  }

  {
    const currentUser = useContext(CurrentUserContext);

  return (
    <div className="profile">
        <h2 className="profile__title">Привет, {currentUser.name}!</h2>
        <form className="profile__form">
            <p className="profile__text">Имя</p>
            <input
                className="profile__input"
                name="name"
                type="name"
                placeholder={currentUser.name}
                value={name || ""}
                minLength="6"
                maxLength="40"
                onChange={handleChange}
                disabled={isInputDisabled}
                required={isInputRequired}
            ></input>
        </form>
        <div className="profile__line"></div>
        <form className="profile__form">
            <p className="profile__text">E-mail</p>
            <input
                className="profile__input"
                name="email"
                type="email"
                placeholder={currentUser.email}
                value={email || ""}
                minLength="6"
                maxLength="40"
                onChange={handleChange}
                disabled={isInputDisabled}
                required={isInputRequired}
            ></input>
        </form>
        <span
          className={`form__input-error${
            !errorInputEmail.isValid ? " form__input-error_active" : ""
          }`}
          id="email-error"
        >
          {isUserUseInputEmail ? errorInputEmail.errorMessage : ""}
        </span>
        <>
            {isEditProfileActive ?
                <>
                    <p className="profile__edit-link" onClick={handleEditProfileClick}>Редактировать</p>
                    <NavLink to="/"
                        className="profile__signout-link"
                        onClick={onSignOut}
                    >
                    Выйти из аккаунта
                    </NavLink>
                </>
            :
            <button className="profile__save-button" type="submit">
                Сохранить
            </button>
            }
        </>
    </div>
  );
  }
}

export default Profile;