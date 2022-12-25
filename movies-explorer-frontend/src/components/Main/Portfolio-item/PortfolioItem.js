import React, { memo } from "react";

function PortfolioItem({
  name,
  link,
  description,
  functional,
})
{  
    return (
      <li className="portfolio__item">
        <div className="portfolio__item-wrapper">
            <a className="portfolio__link" target="_blank" rel="noreferrer" href={link}>{name}</a>
            <a className="portfolio__icon" target="_blank" rel="noreferrer" href={link}>↗</a>
        </div>
        <p className="portfolio__item-description-title">Описание:</p>
        <p className="portfolio__item-description-text">{description}</p>
        <p className="portfolio__item-description-title">Функционал:</p>
        <p className="portfolio__item-description-text">{functional}</p>
      </li>
    );
}

export default memo(PortfolioItem);