import LoginRegForm from "../LoginRegForm/LoginRegForm";
import React, { useState } from "react";

function Register({ onRegister }) 
{
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorInputEmail, setErrorInputEmail] = useState({
    isValid: true,
    errorMessage: "",
  });
  const [isUserUseInputEmail, setIsUserUseInputEmail] = useState(false);

  function handleChange(e) {
    const { value } = e.target;
    (e.target.name === "email") ? setEmail(value) : (e.target.name === "name") ? setName(value) : setPassword(value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onRegister(email, password, name);
  }

  return (
    <section className="register">
      <LoginRegForm
        title="Добро пожаловать!"
        formsName="register"
        buttonText="Зарегистрироваться"
        onSubmit={handleSubmit}
      >
        <p className="loginregform__text">Имя</p>
        <input
          className="loginregform__input"
          name="name"
          type="name"
          placeholder="Имя"
          value={name || ""}
          minLength="6"
          maxLength="40"
          onChange={handleChange}
          required
        ></input>
        <p className="loginregform__text">E-mail</p>
        <input
          className="loginregform__input"
          name="email"
          type="email"
          placeholder="Email"
          value={email || ""}
          minLength="6"
          maxLength="40"
          onChange={handleChange}
          required
        ></input>
        <p className="loginregform__text">Пароль</p>
        <input
          className="loginregform__input"
          name="password"
          type="password"
          placeholder="Password"
          value={[password] || ""}
          minLength="6"
          maxLength="40"
          onChange={handleChange}
          required
        ></input>
        <span
          className={`form__input-error${
            !errorInputEmail.isValid ? " form__input-error_active" : ""
          }`}
          id="email-error"
        >
          {isUserUseInputEmail ? errorInputEmail.errorMessage : ""}
        </span>
      </LoginRegForm>
    </section>
  );
}

export default Register;
