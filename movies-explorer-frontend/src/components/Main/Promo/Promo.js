import React, { useContext, memo } from "react";
import { NavLink } from 'react-router-dom';

function Promo({
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
      <div className="promo">
          <div className="promo__info">
            <h1 className="promo__title">Учебный проект студента факультета <br /> Веб-разработки.</h1>
            <p className="promo__text">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
            <NavLink to="/sign-in" className="promo__button">Узнать больше</NavLink>
          </div>
          <div className="promo__globe"></div>
      </div>
    );
}

export default memo(Promo);