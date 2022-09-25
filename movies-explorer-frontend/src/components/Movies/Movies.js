import React, { memo } from "react";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import MoreSection from "./MoreSection/MoreSection";
import Footer from "../Footer/Footer";

function Movies({
  onShortMoviesFilter,
  onCardLike,
  cards,
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
        />
        <MoreSection />
    </section>
  );
}
  
export default memo(Movies);