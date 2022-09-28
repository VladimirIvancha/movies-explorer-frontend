import React, { memo } from "react";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import MoreSection from "../Movies/MoreSection/MoreSection";

function SavedMovies({
  onCardLike,
  cards,
  onShortMoviesFilter,
  showMoreCards,
  noMoreCards,
  renderCardsQuantity,
  IsShortMoviesCheckBoxOn,
})
{
  const cardLikeButtonViewClass = "MoviesCard__like-icon-close"

  return (
    <section className="savedmovies">
        <SearchForm 
          onShortMoviesFilter={onShortMoviesFilter}
          IsShortMoviesCheckBoxOn={IsShortMoviesCheckBoxOn}
        />
        <MoviesCardList 
          cards={cards}
          onCardLike={onCardLike}
          cardLikeButtonViewClass={cardLikeButtonViewClass}
          renderCardsQuantity={renderCardsQuantity}
        />
        <MoreSection 
          showMoreCards={showMoreCards}
          noMoreCards={noMoreCards}
        />
    </section>
  );
}
  
export default memo(SavedMovies);