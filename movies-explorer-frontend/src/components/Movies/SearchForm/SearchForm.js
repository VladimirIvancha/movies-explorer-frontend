import React, { useState, memo } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox"

function SearchForm({
    onShortMoviesFilter,
    IsShortMoviesCheckBoxOn,
  }) 
  {
    const [searchMovieKeyWords, setSearchMovieKeyWords] = useState("");
    
  
    return (
        <form className="searchform">
            <div className="searchform__wrapper">
                <input
                    value={searchMovieKeyWords || ''}
                    type="text"
                    className="searchform__item"
                    name="prophecy"
                    placeholder="Фильм"
                    minLength="2"
                    maxLength="200"
                    required
                />
                <button className="searchform__find-icon"></button>
            </div> 
            <div className="searchform__line"></div>
            <FilterCheckbox 
                onShortMoviesFilter={onShortMoviesFilter}
                IsShortMoviesCheckBoxOn={IsShortMoviesCheckBoxOn}
            />
        </form>
    );
  }
  
  export default memo(SearchForm);