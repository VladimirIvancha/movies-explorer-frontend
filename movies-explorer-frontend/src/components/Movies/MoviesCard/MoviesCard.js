import React, { useContext, memo } from "react";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext";

function MoviesCard({ card, onCardClick, onCardLike }) {
  const currentUser = useContext(CurrentUserContext);

//   const isOwn = card.owner === currentUser._id;

//   const isLiked = card.likes.some((i) => i === currentUser._id);
  const cardLikeButtonClassName = (
    `MoviesCard__like-icon${card.isLiked ? " MoviesCard__like-icon-active" : ""}`
  );



  return (
    <article className="MoviesCard">
        <div className="MoviesCard__wrapper">
            <div className="MoviesCard-info">
                <h2 className="MoviesCard__title">{card.nameRU}</h2>
                <h3 className="MoviesCard__duration">{card.duration}</h3>
            </div>
            <div className="MoviesCard__like-wrapper">
                <button 
                    type="button" 
                    aria-label="лайкнуть" 
                    className={cardLikeButtonClassName}
                    onClick={() => onCardLike(card)}
                />        
            </div>
        </div>
      <img
        src={card.link}
        className="MoviesCard__image"
        alt={card.name}
        onClick={() => onCardClick(card)}
      />     
    </article>
  );
}

export default memo(MoviesCard);
