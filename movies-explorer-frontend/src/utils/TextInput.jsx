import React from 'react';

export default function TextInput({
  name, label, type, value, onChange, errorMessage, pattern,
}) {

  return (
    <label className="loginregform__label" htmlFor={name}>
      <span className="loginregform__text">{label}</span>
      <input
        className="loginregform__input"
        name={name}
        id={name}
        type={type}
        value={value}
        onChange={onChange}
        pattern={pattern}
        required
      />
      <span className="form__input-error form__input-error_active">{errorMessage}</span>
    </label>
  );
}
