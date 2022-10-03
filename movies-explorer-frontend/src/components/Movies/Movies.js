import React, { memo, useState, useEffect } from "react";
import SearchForm from "./SearchForm/SearchForm";
import Preloader from "./Preloader/Preloader";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import MoreSection from "./MoreSection/MoreSection";
import { moviesApi } from "../../utils/MoviesApi";
import { mainApi } from "../../utils/MainApi";
import { searchFilter } from "../../utils/utils";
import { MOVVIES_MESSAGE, NOT_FOUND_MESSAGE } from '../../utils/constants';
import { initialCardQuantity } from "../../utils/initialCardQuantity";

function Movies({
  renderCardsQuantity,
  setRenderCardsQuantity,
})
{
  const [movies, setMovies] = useState([]);
  const [shorts, setShorts] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');  

  useEffect(() => {
    const savedMovies = localStorage.getItem('savedMovies');

    if (!savedMovies) {
        setLoading(true);

        mainApi.getMovies()
            .then((films) => {
                if (films.length > 0) {
                    localStorage.setItem('savedMovies', JSON.stringify(films));
                }
                setLoading(false);
            })
            .catch(() => {
                setErrorMessage(MOVVIES_MESSAGE);
            });
    }
  }, []);

  const filter = (query, shorts) => {
    const storedMovies = JSON.parse(localStorage.getItem('movies'));
    const filtered = searchFilter(storedMovies, query, shorts);

    if (filtered.length === 0) {
        setErrorMessage(NOT_FOUND_MESSAGE);
    }

    setMovies(filtered);
    setLoading(false);
  };

  const handleSearch = (query, shorts) => {
    setLoading(true);
    setErrorMessage('');
    const storedMovies = JSON.parse(localStorage.getItem('movies'));
    if (!storedMovies) {
      moviesApi.getInitialMovies()
            .then((movies) => {
                localStorage.setItem('movies', JSON.stringify(movies));
                filter(query, shorts);
            })
            .catch(() => {
              setLoading(false);
              setErrorMessage(MOVVIES_MESSAGE);
            });
    } else {
        filter(query, shorts);
    }
    setRenderCardsQuantity(initialCardQuantity);
  };

  return (
    <section className="movies">
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
  
export default memo(Movies);