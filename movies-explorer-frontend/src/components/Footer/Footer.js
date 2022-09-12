import React from 'react';

function Footer() {
    return (
      <footer className="footer">
        <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className="footer__line"></div>
        <div className="footer__wrapper">
            <p className="footer__copyright">&copy; 2022</p>
            <nav className="footer__links">
                <a className="footer__link" href="https://practicum.yandex.ru/">Яндекс.Практикум</a>
                <a className="footer__link" href="https://github.com/">Github</a>
            </nav>
        </div>
      </footer>
    );
  }
export default Footer;