import React, { useState, useEffect, memo } from "react";
import { useLocation } from 'react-router-dom';
import { mainApi } from '../../../utils/MainApi';
import { getTimeFromMins } from "../../../utils/utils";
import { 
  DEFAULT_MESSAGE,
  NO_CONNECTION_MESSAGE,
  IMAGE_DOMAIN,
} from '../../../utils/constants';

function MoviesCard({ 
  card,
}) 
{
  const [savedId, setSavedId] = useState('');
  const [saved, setSaved] = useState(false);
  const location = useLocation();

  const handleSetSaved = (evt) => {
    if (!saved) {
        const newMovie = {};
        const { image, id } = card;

        Object.assign(newMovie, card);

        delete newMovie.id;
        delete newMovie.created_at;
        delete newMovie.updated_at;

        //  Фильтр для заполнения отсутствующих значений в ответе от сервера фильмов
        Object.entries(newMovie).forEach((key) => {
            if (!key[1]) {
                newMovie[key[0]] = '...';
            }
        });

        mainApi.saveMovie({
            ...newMovie,
            image: `https://api.nomoreparties.co/${image.url}`,
            thumbnail: `https://api.nomoreparties.co/${image.formats.thumbnail.url}`,
            movieId: id,
        })
            .then((savedMovie) => {
                setSaved(true);
                setSavedId(savedMovie._id);

                let savedMovies = JSON.parse(localStorage.getItem('savedMovies'));

                if (!savedMovies) {
                    savedMovies = [];
                }

                savedMovies.push(savedMovie);
                localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
            })
            .catch((err) => {
                if (err.status === 400) {
                    console.log(DEFAULT_MESSAGE);
                } else {
                    console.log(NO_CONNECTION_MESSAGE);
                }
            });
    } else {
        mainApi.deleteMovie(savedId)
            .then(() => {
                setSaved(false);
                const savedMovies = JSON.parse(localStorage.getItem('savedMovies'));

                // Поиск и удаление сохраненного фильма из массива в localStorage
                let index = 0;
                for (let i = 0; i < savedMovies.length; i += 1) {
                    const film = savedMovies[i];
                    if (film._id === card._id) {
                        index = i;
                    }
                }

                savedMovies.splice(index, 1);
                localStorage.setItem('savedMovies', JSON.stringify(savedMovies));

                if (location.pathname === '/saved-movies') {
                    evt.target.closest('.MoviesCard').remove();
                }
            })
            .catch(() => console.log(NO_CONNECTION_MESSAGE));
    }
  };

  useEffect(() => {
      const savedMovies = JSON.parse(localStorage.getItem('savedMovies'));

      if (savedMovies) {
          savedMovies.forEach((savedMovie) => {
              if (savedMovie.movieId === card.id || savedMovie._id === card._id) {
                  setSaved(true);
                  setSavedId(savedMovie._id);
              }
          });
      }
  }, []);

  return (
    <article className="MoviesCard">
        <div className="MoviesCard__wrapper">
            <div className="MoviesCard-info">
                <h2 className="MoviesCard__title">{card.nameRU}</h2>
                <h3 className="MoviesCard__duration">{getTimeFromMins(card.duration)}</h3>
            </div>
            <div className="MoviesCard__like-wrapper">
            {location.pathname !== '/saved-movies' ? (
                <button
                  className={`MoviesCard__like-icon ${saved && 'MoviesCard__like-icon-active'}`}
                  type="button" 
                  aria-label="Лайкнуть"
                  onClick={handleSetSaved}
                />
                ) : (
                  <button
                  className="MoviesCard__like-icon MoviesCard__like-icon-close"
                  type="button"
                  aria-label="Удалить"
                  onClick={handleSetSaved}
                />
              )}
            </div>
        </div>
      <a href={card.trailerLink} target="_blank" rel="noreferrer">
        <img 
          className="MoviesCard__image"
          src={location.pathname === '/movies'
            ? `${IMAGE_DOMAIN + card.image.url}`
            : card.image}
          alt={card.nameRU}
        /> 
      </a>
    </article>
  );
}

export default memo(MoviesCard);
