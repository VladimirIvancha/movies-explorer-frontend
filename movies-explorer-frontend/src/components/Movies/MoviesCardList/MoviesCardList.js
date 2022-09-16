import React, { useContext, memo } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({
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

    <div className="elements">
      {cards.map((card) => 
          (
            <MoviesCard
              key={card._id}
              card={card}
              onCardClick={onCardClick}
              onCardLike={onCardLike}
              onTrashClick={onTrashClick}
            />
          )
        )}
    </div>
  )
}

export default memo(MoviesCardList);