import React, { memo } from "react";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import MoreSection from "./MoreSection/MoreSection";

function Movies({
  onShortMoviesFilter,
  onCardLike,
  cards,
  showMoreCards,
  noMoreCards,
  renderCardsQuantity,
  IsShortMoviesCheckBoxOn,
  onUpdateMoviesKeyWords,
})
{
  const cardLikeButtonViewClass = "MoviesCard__like-icon-active"

  return (
    <section className="movies">
        <SearchForm 
          onShortMoviesFilter={onShortMoviesFilter}
          IsShortMoviesCheckBoxOn={IsShortMoviesCheckBoxOn}
          onUpdateMoviesKeyWords={onUpdateMoviesKeyWords}
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
  
export default memo(Movies);