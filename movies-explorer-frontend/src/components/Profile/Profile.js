import React, { useState, useContext, useEffect } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { NavLink } from 'react-router-dom';
import { mainApi } from '../../utils/MainApi';
import useFormValidation from '../../utils/useFormValidation';
import { useHistory } from 'react-router-dom';
import {
  CONFLICT_ERROR_CODE,
  EMAIL_EXIST_MESSAGE,
  NO_CONNECTION_MESSAGE,
  SUCCESS_UPDATE_MESSAGE,
} from '../../utils/constants';

function Profile() {
  const form = useFormValidation();
  const history = useHistory();
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [disabled, setDisabled] = useState(true);
  const [message, setMessage] = useState('');

  const handleSignout = () => {
    setCurrentUser({});
    localStorage.clear();
    history.push("/");
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    setDisabled(true);

    mainApi.patchUserInfo(form.values)
        .then((user) => {
          setCurrentUser(user);
          setMessage(SUCCESS_UPDATE_MESSAGE);
          form.resetForm();
        })
        .catch((err) => {
          if (err.status === CONFLICT_ERROR_CODE) {
            setMessage(EMAIL_EXIST_MESSAGE);
          } else {
            setMessage(NO_CONNECTION_MESSAGE);
          }
        });
  };

  useEffect(() => {
    form.setValues({ name: currentUser.name, email: currentUser.email });
  }, [currentUser]);

  useEffect(() => {
    const { name, email } = form.values;

    if (form.isValid && (currentUser.name !== name || currentUser.email !== email)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [form.values, currentUser]);

  return (
    <div className="profile">
        <h2 className="profile__title">{`Привет, ${currentUser.name}!`}</h2>
        <form 
          className="profile__form"
          id="profile"
          name="profile"
          onSubmit={handleSubmit}
        >
          <div className="profile__wrapper">
            <p className="profile__text">Имя</p>
            <input
                className="profile__input"
                type="text"
                name="name"
                value={form.values.name || ''}
                onChange={form.handleChange}
                pattern="^[a-zA-Zа-яА-Я\s-]+$"
                required
            ></input>
          </div>
          <div className="profile__line"></div>
          <div className="profile__wrapper">
              <p className="profile__text">E-mail</p>
              <input
                  className="profile__input"
                  type="email"
                  name="email"
                  value={form.values.email || ''}
                  onChange={form.handleChange}
                  pattern="^[\w]+@[a-zA-Z]+\.[a-zA-Z]{1,3}$"
                  required
              ></input>
          </div>
        </form>
        <p className="form__input-error form__input-error_active">
          {message}
        </p>
        <button 
          className={`profile__edit-link ${disabled && 'profile__edit-link_disabled'}`}
          type="submit"
          form="profile"
          disabled={disabled}
        >
          Редактировать
        </button>
        <NavLink to="/"
          className="profile__signout-link"
          onClick={handleSignout}
        >
          Выйти из аккаунта
        </NavLink>
    </div>
  );
}

export default Profile;