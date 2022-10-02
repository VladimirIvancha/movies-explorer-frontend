import React, { useState, useEffect, memo } from "react";
import { useLocation } from "react-router-dom";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox"

function SearchForm({
    handleSearch,
    setShorts,
    shorts,
  }) 
  {
    const [placeholderContent, setPlaceholderContent] = useState('Фильм');
    const [error, setError] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const {pathname} = useLocation();
    
    function handleInput(e) {
        setInputValue(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!inputValue) {
            setError(true);
            setPlaceholderContent('Нужно ввести ключевое слово');
            e.target.elements['searchmovie'].focus();
            return;
        }
        setError(false);
        setPlaceholderContent('Фильм');

        localStorage.setItem('query', inputValue);

        handleSearch(inputValue, shorts);
    }

    const handleCheckbox = () => {
        setShorts(!shorts);
        localStorage.setItem('shorts', !shorts);
        handleSearch(inputValue, !shorts);
    };

    useEffect(() => {
        if (pathname === '/movies') {
            const savedInputValue = localStorage.getItem('query');
            const savedShorts = JSON.parse(localStorage.getItem('shorts'));
    
            if (savedInputValue) {
                setInputValue(savedInputValue);
            }
    
            if (savedShorts) {
                setShorts(savedShorts);
            }
    
            if (savedInputValue || (savedShorts === true)) {
                handleSearch(savedInputValue, savedShorts);
            }
        }
      }, []);
  
    return (
        <form className="searchform" name="searchform" onSubmit={handleSubmit} noValidate>
            <div className="searchform__wrapper" htmlFor="searchmovie">
                <input
                    className={`searchform__item ${error && 'searchform__item_error'}`}
                    id="searchmovie"
                    name="searchmovie"
                    type="text"
                    placeholder={placeholderContent}
                    value={inputValue}
                    onChange={handleInput}
                    required
                />
                <button
                    className="searchform__find-icon"
                    type="submit"
                    aria-label="Искать"
                ></button>
            </div> 
            <div className="searchform__line"></div>
            <FilterCheckbox
                value={shorts}
                onChange={handleCheckbox}
            />
        </form>
    );
  }
  
  export default memo(SearchForm);