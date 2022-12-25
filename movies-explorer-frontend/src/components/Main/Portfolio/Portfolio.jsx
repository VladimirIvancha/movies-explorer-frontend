import React, { memo } from "react";
import PortfolioItem from "../Portfolio-item/PortfolioItem";
import { initialPortfolioData } from "../../../utils/initial-portfolio-data";

function Portfolio()
{  
    return (
      <article className="portfolio">
        <ul className="portfolio__list">
            <li className="portfolio__title">Портфолио</li>
            {
                initialPortfolioData.map(item => 
                   (
                    <PortfolioItem 
                    name={item.name}
                    link={item.link}
                    description={item.description}
                    functional={item.functional}
                    />
                   ) 
                )
            }
        </ul>
      </article>
    );
}

export default memo(Portfolio);