import React, { memo } from "react";

function MoreSection({
    showMoreCards,
    needMoreCards,
  }) 
  {
    const moreButtonText = (
        needMoreCards ? "Свернуть" : "Ещё"
    )

    return (
        <article className="moreSection">
            <button type="button" className="moreSection__button" onClick={showMoreCards}>
                {moreButtonText}
            </button>
        </article>
    );
  }
  
  export default memo(MoreSection);