import React from 'react';
import { NavLink } from 'react-router-dom';

function NotFoundPage() {
    return (
      <section className="notfoundpage">
        <p className="notfoundpage__title">404</p>
        <p className="notfoundpage__text">Страница не найдена</p>
        <NavLink className="notfoundpage__link" to='/'>Назад</NavLink>
      </section>
    );
  }
export default NotFoundPage;