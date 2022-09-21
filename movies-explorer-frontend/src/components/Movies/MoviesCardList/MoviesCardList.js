import React, { memo } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({
  onCardClick,
  onTrashClick,
  onCardLike,
  cards,
}) 

{
  return (
    <article className="elements">
      {cards.map((card) => 
          (
            <MoviesCard
              key={card._id}
              card={card}
              onCardClick={onCardClick}
              onCardLike={onCardLike}
              onTrashClick={onTrashClick}
            />
          )
        )}
    </article>
  )
}

export default memo(MoviesCardList);