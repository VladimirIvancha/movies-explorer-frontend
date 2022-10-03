import React, { useState, useContext, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import * as auth from "../../utils/auth";
import LoginRegForm from "../LoginRegForm/LoginRegForm";
import useFormValidation from "../../utils/useFormValidation"
import TextInput from '../../utils/TextInput';
import { mainApi } from "../../utils/MainApi";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { TooltipContext } from "../../contexts/TooltipContext";
import { 
  UNAUTH_ERROR_CODE,
  SUCCESS_ENTER 
} from '../../utils/constants';

function Login({ onAuth }) {
  const form = useFormValidation();
  const history = useHistory();
  const [loginError, setLoginError] = useState('');
  const [disabled, setDisabled] = useState(true);

  const {setCurrentUser} = useContext(CurrentUserContext);

  const { setTooltipMessage } = useContext(TooltipContext);

  function handleSubmit(e) {
    e.preventDefault();
    setDisabled(true);

    auth.authorize(form.values)
    .then((token) => {
      auth.getCheckToken(token)
      .then(() => mainApi.getUserInfo())
      .then((user) => {
          if (user) {
              localStorage.setItem('loggedIn', true);
              localStorage.setItem('userId', user._id);
              setCurrentUser(user);
              history.push('/movies');
          }
      })
      .then(() => setTooltipMessage(SUCCESS_ENTER));
    })
    .catch((err) => {
      if (err.status === UNAUTH_ERROR_CODE) {
          setLoginError('Неправильные почта или пароль');
      } else {
          setLoginError('Нет соединения с сервером');
      }
    });
  }  

  useEffect(() => {
    setDisabled(!form.isValid);
  }, [form.values]);

  return (
    <section className="logIn">
      <LoginRegForm
        title="Рады видеть!"
        formsName="logIn"
        buttonText="Войти"
        onSubmit={handleSubmit}
        disabled={disabled}
      >
        <form 
          className="loginregform__form"
          id="login"
          name="login"
          onSubmit={handleSubmit}
          noValidate
        >
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
            {loginError}
          </p>
        </form>
      </LoginRegForm>
    </section>
  );
}

export default Login;
