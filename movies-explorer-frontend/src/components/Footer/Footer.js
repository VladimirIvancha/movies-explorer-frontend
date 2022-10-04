import React from 'react';

function Footer({ needFooter }) {
    return (
      <footer className={`footer ${needFooter && 'footer_active'}`}>
        <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className="footer__line"></div>
        <div className="footer__wrapper">
            <p className="footer__copyright">&copy; 2022</p>
            <nav className="footer__links">
                <a className="footer__link" target="_blank" rel="noreferrer" href="https://practicum.yandex.ru/">Яндекс.Практикум</a>
                <a className="footer__link" target="_blank" rel="noreferrer" href="https://github.com/">Github</a>
            </nav>
        </div>
      </footer>
    );
  }
export default Footer;