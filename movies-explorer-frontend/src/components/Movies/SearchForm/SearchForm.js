import React, { useState, memo } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox"

function SearchForm({
    onShortMoviesFilter,
  }) 
  {
    const [searchMovieKeyWords, setSearchMovieKeyWords] = useState("");
    
  
    return (
        <article className="searchform">
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
                <div className="searchform__find-icon"></div>
            </div> 
            <div className="searchform__line"></div>
            <FilterCheckbox 
            onShortMoviesFilter={onShortMoviesFilter}
            />
        </article>
    );
  }
  
  export default memo(SearchForm);