import React, { memo } from "react";

function AboutProject({
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
      <div className="aboutProject">
        <h2 className="aboutProject__title">О проекте</h2>
        <div className="aboutProject__line"></div>
        <ul className="aboutProject__info">
            <li className="aboutProject__info-title">Дипломный проект включал 5 этапов</li>
            <li className="aboutProject__info-title">На выполнение диплома ушло 5 недель</li>
            <li className="aboutProject__info-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</li>
            <li className="aboutProject__info-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</li>
        </ul>
        <ul className="aboutProject__timeline">
            <li className="aboutProject__timeline-title">1 неделя</li>
            <li className="aboutProject__timeline-title">4 недели</li>
            <li className="aboutProject__timeline-text">Back-end</li>
            <li className="aboutProject__timeline-text">Front-end</li>
        </ul>
      </div>
    );
}

export default memo(AboutProject);