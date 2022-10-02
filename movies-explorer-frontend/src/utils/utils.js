import { SHORTMOVIES_DURATION } from './constants.js';


function searchFilter(array, query, short) {
    if (!array) {
        return [];
    }

    let filtered = [...array];

    if (query) {
        filtered = filtered.filter((element) => element.nameRU
            .toLowerCase()
            .includes(query.toLowerCase()));
    }

    if (short) {
        return filtered.filter((element) => element.duration <= SHORTMOVIES_DURATION);
    }

    return filtered;
}

function getTimeFromMins(mins) {
    let hours = Math.trunc(mins/60);
    let minutes = mins % 60;
    return hours + 'ч. ' + minutes + 'м.';
};

export {
    searchFilter,
    getTimeFromMins,
};
