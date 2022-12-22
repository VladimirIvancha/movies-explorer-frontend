import React, { memo } from "react";

function Portfolio()
{  
    return (
      <article className="portfolio">
        <ul className="portfolio__grid">
            <li className="portfolio__title">Портфолио</li>
            <li className="portfolio__item">
                <a className="portfolio__link" target="_blank" rel="noreferrer" href="https://vladimirivancha.github.io/cool-colours/">Pet-проект с генерацией рандомных цветов</a>
                <a className="portfolio__icon" target="_blank" rel="noreferrer" href="https://vladimirivancha.github.io/cool-colours/">↗</a>
            </li>
            <li className="portfolio__item">
                <a className="portfolio__link" target="_blank" rel="noreferrer" href="https://vladimirivancha.github.io/russian-travel/">Одностраничный сайт о путешествиях по России</a>
                <a className="portfolio__icon" target="_blank" rel="noreferrer" href="https://vladimirivancha.github.io/russian-travel/">↗</a>
            </li>
            <li className="portfolio__item">
                <a className="portfolio__link" target="_blank" rel="noreferrer" href="https://github.com/VladimirIvancha">Одностраничное приложение</a>
                <a className="portfolio__icon" target="_blank" rel="noreferrer" href="https://github.com/VladimirIvancha">↗</a>
            </li>
        </ul>
      </article>
    );
}

export default memo(Portfolio);