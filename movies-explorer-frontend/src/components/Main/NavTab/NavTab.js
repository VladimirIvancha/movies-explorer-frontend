import React, { useContext, memo } from "react";

function NavTab({
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
      <div className="navTab">
          
      </div>
    );
}

export default memo(NavTab);