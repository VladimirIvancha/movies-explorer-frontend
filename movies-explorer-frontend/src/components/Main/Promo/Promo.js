import React, { memo } from "react";
import { Link } from "react-scroll";

function Promo()  
{  
    return (
      <div className="promo">
          <div className="promo__info">
            <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
            <p className="promo__text">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
            <Link 
                to="aboutProject"
                spy={true}
                className="promo__button"
                smooth={true}>
                Узнать больше
            </Link>
          </div>
          <div className="promo__globe"></div>
      </div>
    );
}

export default memo(Promo);