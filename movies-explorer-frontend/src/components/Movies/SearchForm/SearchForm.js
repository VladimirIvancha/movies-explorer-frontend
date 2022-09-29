import React, { useState, memo } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox"

function SearchForm({
    onShortMoviesFilter,
    IsShortMoviesCheckBoxOn,
    onUpdateMoviesKeyWords,
  }) 
  {
    const [searchMovieKeyWords, setSearchMovieKeyWords] = useState("");
    const [errorInputKeyWords, setErrorInputKeyWords] = useState({
        isValid: true,
        errorMessage: "",
    });
    const [isEmptyMovieKeyWords, setIsEmptyMovieKeyWords] = useState(false);
    
    function handleOnChangeInputKeyWords(e) {
        setSearchMovieKeyWords(e.target.value);
        setIsEmptyMovieKeyWords(true);
        setErrorInputKeyWords({
          isValid: e.target.validity.valid,
          errorMessage: e.target.validationMessage,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(searchMovieKeyWords)
    
        onUpdateMoviesKeyWords({
            keyWords: searchMovieKeyWords,
        });

        setIsEmptyMovieKeyWords(false);
    }
  
    return (
        <form className="searchform" onSubmit={handleSubmit} noValidate>
            <div className="searchform__wrapper">
                <input
                    value={searchMovieKeyWords || ''}
                    type="text"
                    className="searchform__item"
                    name="movie"
                    placeholder="Фильм"
                    minLength="2"
                    maxLength="200"
                    required
                    onChange={handleOnChangeInputKeyWords}
                />
                <button
                    type="submit"
                    className="searchform__find-icon"
                ></button>
            </div> 
            <div className="searchform__line"></div>
            <span
                className={`searchform__input-error ${
                    !errorInputKeyWords.isValid ? "searchform__input-error_active" : ""
                }`}
                id="profile-name-error"
                >
                {isEmptyMovieKeyWords ? errorInputKeyWords.errorMessage : ""}
            </span>
            <FilterCheckbox 
                onShortMoviesFilter={onShortMoviesFilter}
                IsShortMoviesCheckBoxOn={IsShortMoviesCheckBoxOn}
            />
        </form>
    );
  }
  
  export default memo(SearchForm);