import React, { memo } from "react";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import MoreSection from "../Movies/MoreSection/MoreSection";

function SavedMovies({
  onCardLike,
  cards,
  onShortMoviesFilter,
  showMoreCards,
  needMoreCards,
})
{
  const cardLikeButtonViewClass = "MoviesCard__like-icon-close"

  return (
    <section className="savedmovies">
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
  
export default memo(SavedMovies);