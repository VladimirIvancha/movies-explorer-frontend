import React, { memo } from "react";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import MoreSection from "./MoreSection/MoreSection";

function Movies({
  onShortMoviesFilter,
  onCardLike,
  cards,
  showMoreCards,
  needMoreCards,
})
{
  const cardLikeButtonViewClass = "MoviesCard__like-icon-active"

  return (
    <section className="movies">
        <SearchForm 
          onShortMoviesFilter={onShortMoviesFilter}
        />
        <MoviesCardList 
          cards={cards}
          onCardLike={onCardLike}
          cardLikeButtonViewClass={cardLikeButtonViewClass}
          needMoreCards={needMoreCards}
        />
        <MoreSection 
          showMoreCards={showMoreCards}
          needMoreCards={needMoreCards}
        />
    </section>
  );
}
  
export default memo(Movies);