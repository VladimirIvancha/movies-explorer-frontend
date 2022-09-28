import React, { memo } from "react";

function FilterCheckbox({
    onShortMoviesFilter,
    IsShortMoviesCheckBoxOn,
  }) 
  {
    return (
        <div className="filtercheckbox">
            <input 
              type="checkbox" 
              className={`custom-checkbox ${IsShortMoviesCheckBoxOn && 'custom-checkbox_active'}`}
              id="happy" 
              name="happy" 
              value="yes"
              onClick={() => onShortMoviesFilter()}
            />
            <label htmlFor="happy"></label>
            <p className="custom-checkbox-text">Короткометражки</p>
        </div>
    );
  }

export default memo(FilterCheckbox);