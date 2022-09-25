import React, { memo } from "react";

function MoreSection({
    onShortMoviesFilter,
  }) 
  {
    return (
        <article className="moreSection">
            <button className="moreSection__button">
                Ещё
            </button>
        </article>
    );
  }
  
  export default memo(MoreSection);