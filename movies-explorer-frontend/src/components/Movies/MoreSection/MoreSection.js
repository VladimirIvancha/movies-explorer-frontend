import React, { memo } from "react";

function MoreSection({
    showMoreCards,
    noMoreCards,
  }) 
  {
    return (
        <article className="moreSection">
            <button type="button" 
                className={`moreSection__button ${noMoreCards && 'moreSection__button_hidden'}`} 
                onClick={showMoreCards}
            >
                Ещё
            </button>
        </article>
    );
  }
  
  export default memo(MoreSection);