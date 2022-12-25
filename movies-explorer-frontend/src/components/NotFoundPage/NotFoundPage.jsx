import React from 'react';
import { useHistory } from 'react-router-dom';

function NotFoundPage() {
  const history = useHistory();

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <section className="notfoundpage">
      <p className="notfoundpage__title">404</p>
      <p className="notfoundpage__text">Страница не найдена</p>
      <button 
        className="notfoundpage__link"
        type="button"
        onClick={handleGoBack}
      >
        Назад
      </button>
    </section>
  );
}

export default NotFoundPage;