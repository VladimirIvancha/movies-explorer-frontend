import {
    MAX_MOVIES_1140,
    MAX_MOVIES_768,
    MAX_MOVIES_DEFAULT,
    BREAKPOINT_768,
    BREAKPOINT_320,
  } from './constants';

export const initialCardQuantity = function () {
    let widthWind = document.querySelector('body').offsetWidth;
    let n = MAX_MOVIES_1140;
    if (widthWind > BREAKPOINT_320 && widthWind <= BREAKPOINT_768) {
        n = MAX_MOVIES_768;
    } else if (widthWind <= BREAKPOINT_320) {
        n = MAX_MOVIES_DEFAULT;
    };
    return n;
}