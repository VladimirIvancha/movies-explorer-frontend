import LoginRegForm from "../LoginRegForm/LoginRegForm";
import React, { useState } from "react";

function Login({ onAuth }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleChange(e) {
    const { value } = e.target;
    e.target.name === "email" ? setEmail(value) : setPassword(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAuth(email, password);
  }

  return (
    <section className="logIn">
      <LoginRegForm
        title="Рады видеть!"
        formsName="logIn"
        buttonText="Войти"
        onSubmit={handleSubmit}
      >
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
          value={password || ""}
          minLength="6"
          maxLength="40"
          onChange={handleChange}
          required
        ></input>
      </LoginRegForm>
    </section>
  );
}

export default Login;
