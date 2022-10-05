import React, { useState, useEffect, memo } from "react";
import { initialCardQuantity } from "../../../utils/initialCardQuantity";
import {
  MAX_MOVIES_STEP_1140,
  MAX_MOVIES_STEP_DEFAULT,
  BREAKPOINT_1140,
  BREAKPOINT_1139,
} from '../../../utils/constants';

function MoreSection({
    movies,
    renderCardsQuantity,
    setRenderCardsQuantity,
  }) 
  {
    const [noMoreCards, setNoMoreCards] = useState(false);

    useEffect(() => {
        if (movies.length <= renderCardsQuantity) {
          setNoMoreCards(true);
        } else {
          setNoMoreCards(false);
        }
    }, [movies.length, renderCardsQuantity]);

    function showMoreCards() {
        let widthWind = document.querySelector('body').offsetWidth;
        if (widthWind >= BREAKPOINT_1140) {
          let n=MAX_MOVIES_STEP_1140;
          let newRenderCardsQuantity = renderCardsQuantity+n
          setRenderCardsQuantity(newRenderCardsQuantity);
        } else if (widthWind <= BREAKPOINT_1139) {
          let n=MAX_MOVIES_STEP_DEFAULT;
          let newRenderCardsQuantity = renderCardsQuantity+n
          setRenderCardsQuantity(newRenderCardsQuantity);
        };
    }

    useEffect(() => {
      window.addEventListener('resize', updateScreenWidth);
      return () => {
        window.removeEventListener("resize", updateScreenWidth);
      };
    }, []);
    
    function updateScreenWidth() {
      setNoMoreCards(false);
      function onResize() {
        setRenderCardsQuantity(initialCardQuantity);
      }
      const resizeTimeout = setTimeout(() => {onResize()}, 500);
      return () => clearTimeout(resizeTimeout);
    };

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