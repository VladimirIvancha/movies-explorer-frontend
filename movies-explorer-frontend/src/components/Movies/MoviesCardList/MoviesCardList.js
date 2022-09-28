import React, { memo } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({
  onCardClick,
  onTrashClick,
  onCardLike,
  cards,
  cardLikeButtonViewClass,
  renderCardsQuantity,
}) 

{
  return (
    <article className="MoviesCardList">
      {cards.slice(0, renderCardsQuantity).map((card) => 
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