import React, { useContext, memo } from "react";

function Portfolio({
    onEditProfile,
    onAddPlace,
    onEditAvatar,
    onCardClick,
    onTrashClick,
    closeAllPopups,
    onUpdateUser,
    onUpdateAvatar,
    onCardLike,
    onCardDelete,
    onAddPlaceSubmit,
    cards,
    isOpenEditProfile,
    isAddPlacePopupOpen,
    isEditAvatarPopupOpen,
    isDeletePlacePopupOpen,
    isImagePopupOpen,
    isSubmitInLoading,
    isSubmitSuccess,
    selectedCard,
}) 
  
{  
    return (
      <div className="portfolio">
        <ul className="portfolio__grid">
            <li className="portfolio__title">Портфолио</li>
            <li className="portfolio__item">
                <a className="portfolio__link" href="https://github.com/VladimirIvancha">Статичный сайт</a>
                <a className="portfolio__icon" href="https://github.com/VladimirIvancha">↗</a>
            </li>
            <li className="portfolio__item">
                <a className="portfolio__link" href="https://github.com/VladimirIvancha">Адаптивный сайт</a>
                <a className="portfolio__icon" href="https://github.com/VladimirIvancha">↗</a>
            </li>
            <li className="portfolio__item">
                <a className="portfolio__link" href="https://github.com/VladimirIvancha">Одностраничное приложение</a>
                <a className="portfolio__icon" href="https://github.com/VladimirIvancha">↗</a>
            </li>
        </ul>
      </div>
    );
}

export default memo(Portfolio);