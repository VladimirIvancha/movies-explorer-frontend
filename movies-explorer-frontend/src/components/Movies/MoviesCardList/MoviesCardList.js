import React, { memo } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({
  onCardClick,
  onTrashClick,
  onCardLike,
  cards,
  cardLikeButtonViewClass,
  needMoreCards,
}) 

{
  return (
    <article className={`MoviesCardList ${needMoreCards && 'MoviesCardList_opened'}`}>
      {cards.map((card) => 
          (
            <MoviesCard
              key={card._id}
              card={card}
              onCardClick={onCardClick}
              onCardLike={onCardLike}
              onTrashClick={onTrashClick}
              cardLikeButtonViewClass={cardLikeButtonViewClass}
            />
          )
        )}
    </article>
  )
}

export default memo(MoviesCardList);