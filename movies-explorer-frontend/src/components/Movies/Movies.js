import React, { memo } from "react";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function Movies({
  onShortMoviesFilter,
  onCardLike,
  cards,
})
{
  return (
    <section className="movies">
        <SearchForm 
        onShortMoviesFilter={onShortMoviesFilter}
        />
        <MoviesCardList 
        cards={cards}
        onCardLike={onCardLike}
        />
        <Footer />
    </section>
  );
}
  
export default memo(Movies);