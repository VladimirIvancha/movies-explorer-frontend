import React, { memo } from "react";

function FilterCheckbox({
    value,
    onChange,
  }) 
  {
    return (
        <div className="filtercheckbox" htmlFor="shorts">
            <input
              className={`custom-checkbox ${value && 'custom-checkbox_active'}`}
              type="checkbox"
              name="shorts"
              id="shorts" 
              checked={value}
              onChange={onChange}
            />
            <label htmlFor="shorts"></label>
            <p className="custom-checkbox-text">Короткометражки</p>
        </div>
    );
  }

export default memo(FilterCheckbox);