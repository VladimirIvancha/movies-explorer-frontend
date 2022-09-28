export const initialCardQuantity = function () {
    let widthWind = document.querySelector('body').offsetWidth;
    let n = 12;
    if (widthWind > 320 && widthWind <= 768) {
        n = 8;
    } else if (widthWind <= 320) {
        n = 5;
    };
    return n;
}