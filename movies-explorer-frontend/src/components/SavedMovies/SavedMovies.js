import React, { memo } from "react";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function SavedMovies({
  onCardLike,
  cards,
  onShortMoviesFilter,
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
        />
    </section>
  );
}
  
export default memo(SavedMovies);