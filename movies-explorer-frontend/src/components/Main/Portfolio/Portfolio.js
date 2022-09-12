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
          
      </div>
    );
}

export default memo(Portfolio);