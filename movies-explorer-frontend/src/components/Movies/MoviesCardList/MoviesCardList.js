import React, { memo } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({
  movies,
  errorMessage,
  renderCardsQuantity,
}) 

{
  return (
    <article className="MoviesCardList">
      {errorMessage
        ? <p className="movies-card-list__error-message">{errorMessage}</p>
        : (
          <div className="movies-card-list__movies-container">
            {movies.slice(0, renderCardsQuantity).map((card) => 
              (
                <MoviesCard
                  key={card.id || card.movieId}
                  card={card}
                />
              )
            )}
          </div> 
        )}
    </article>
  );
}

export default memo(MoviesCardList);