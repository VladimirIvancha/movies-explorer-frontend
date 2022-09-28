import React, { memo } from "react";

function MoviesCard({ 
  card,
  onCardClick,
  onCardLike,
  cardLikeButtonViewClass,
}) 
{
  const cardLikeButtonClassName = (
    `MoviesCard__like-icon ${card.isLiked ? cardLikeButtonViewClass : ""}`
  );

  function getTimeFromMins(mins) {
    let hours = Math.trunc(mins/60);
    let minutes = mins % 60;
    return hours + 'ч. ' + minutes + 'м.';
  };

  return (
    <article className="MoviesCard">
        <div className="MoviesCard__wrapper">
            <div className="MoviesCard-info">
                <h2 className="MoviesCard__title">{card.nameRU}</h2>
                <h3 className="MoviesCard__duration">{getTimeFromMins(card.duration)}</h3>
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
        alt={card.nameRU}
        onClick={() => onCardClick(card)}
      />     
    </article>
  );
}

export default memo(MoviesCard);
