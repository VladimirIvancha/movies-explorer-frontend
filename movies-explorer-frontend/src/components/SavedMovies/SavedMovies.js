import React, { useState, useEffect, memo } from "react";
import SearchForm from "../Movies/SearchForm/SearchForm";
import Preloader from "../Movies/Preloader/Preloader";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import MoreSection from "../Movies/MoreSection/MoreSection";
import { mainApi } from '../../utils/MainApi';
import {searchFilter} from "../../utils/utils";
import { NO_CONNECTION_MESSAGE, NOT_FOUND_MESSAGE } from '../../utils/constants';

function SavedMovies({
  renderCardsQuantity,
  setRenderCardsQuantity,
})
{
  const [movies, setMovies] = useState(JSON.parse(localStorage.getItem('savedMovies')) || []);
  const [shorts, setShorts] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSearch = (query, isShort) => {
        setLoading(true);
        setErrorMessage('');

        const savedMovies = JSON.parse(localStorage.getItem('savedMovies'));

        const filtered = searchFilter(savedMovies, query, isShort);

        if (filtered.length === 0) {
          setErrorMessage(NOT_FOUND_MESSAGE);
    }

    setMovies(filtered);
    setLoading(false);
  };

  useEffect(() => {
        setLoading(true);
        mainApi.getMovies()
            .then((savedMovies) => {
                const user = localStorage.getItem('userId');
                const ownMovies = savedMovies.filter((film) => film.owner === user);
                localStorage.setItem('savedMovies', JSON.stringify(ownMovies));
                setLoading(false);
            })
            .catch(() => console.log(NO_CONNECTION_MESSAGE));
  }, []);

  return (
    <section className="savedmovies">
        <SearchForm
          handleSearch={handleSearch}
          setShorts={setShorts}
          shorts={shorts}
        />
        {loading
          ? <Preloader/>
          : <>
              <MoviesCardList
                renderCardsQuantity={renderCardsQuantity}
                movies={movies}
                errorMessage={errorMessage}
              />
              <MoreSection 
                movies={movies}
                renderCardsQuantity={renderCardsQuantity}
                setRenderCardsQuantity={setRenderCardsQuantity}
              />
            </>
        }
    </section>
  );
}
  
export default memo(SavedMovies);