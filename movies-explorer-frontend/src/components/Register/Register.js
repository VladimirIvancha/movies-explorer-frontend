import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import * as auth from "../../utils/auth";
import LoginRegForm from "../LoginRegForm/LoginRegForm";
import TextInput from '../../utils/TextInput';
import { mainApi } from "../../utils/MainApi";
import useFormValidation from "../../utils/useFormValidation"
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import {CONFLICT_ERROR_CODE} from '../../utils/constants';

function Register() {
  const history = useHistory();
  const form = useFormValidation();
  const [registerError, setRegisterError] = useState('');
  const [disabled, setDisabled] = useState(true);

  const {setCurrentUser} = useContext(CurrentUserContext);

  function handleSubmit(e) {
    e.preventDefault();
    setDisabled(true);

    auth.register(form.values)
    .then((user) => auth.authorize({email: user.email, password: form.values.password}))
    .then(() => mainApi.getUser())
    .then((user) => {
        if (user) {
            localStorage.setItem('loggedIn', true);
            localStorage.setItem('userId', user._id);
            setCurrentUser(user);
            history.push('/movies');
        }
    })
    .catch((err) => {
        if (err.status === CONFLICT_ERROR_CODE) {
            setRegisterError('Данный email уже зарегистрирован');
        } else {
            setRegisterError('Нет соединения с сервером');
        }
    })
  }

  useEffect(() => {
    setDisabled(!form.isValid);
  }, [form.values]);

  return (
    <section className="register">
      <LoginRegForm
        title="Добро пожаловать!"
        formsName="register"
        buttonText="Зарегистрироваться"
        onSubmit={handleSubmit}
        disabled={disabled}
      >
        <form 
          className="loginregform__form"
          id="register"
          name={"register"}
          noValidate
        >
          <TextInput
            name="name"
            label="Имя"
            type="text"
            pattern="^[a-zA-Zа-яА-Я\s-]+$"
            value={form.values.name || ''}
            onChange={form.handleChange}
            errorMessage={form.errors.name}
          />
          <TextInput
            name="email"
            label="E-mail"
            type="email"
            pattern="^[\w]+@[a-zA-Z]+\.[a-zA-Z]{1,3}$"
            value={form.values.email || ''}
            onChange={form.handleChange}
            errorMessage={form.errors.email}
          />
          <TextInput
            name="password"
            label="Пароль"
            type="password"
            value={form.values.password || ''}
            onChange={form.handleChange}
            errorMessage={form.errors.password}
          />
          <p className="form__input-error form__input-error_active">
            {registerError}
          </p>
        </form>
      </LoginRegForm>
    </section>
  );
}

export default Register;
