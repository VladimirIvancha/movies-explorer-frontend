import React, { memo } from "react";

function AboutMe({
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
      <div className="aboutMe">
        <h2 className="aboutMe__title">Студент</h2>
        <div className="aboutMe__line"></div>
        <div className="aboutMe__wrapper">
            <div className="aboutMe__info">
                <h3 className="aboutMe__info-title">Владимир</h3>
                <h4 className="aboutMe__info-subtitle">Фронтенд-разработчик, 40 лет</h4>
                <p className="aboutMe__info-text">Я&nbsp;родился и&nbsp;живу в&nbsp;Саратове, закончил факультет экономики СГУ. У&nbsp;меня есть жена 
и&nbsp;дочь. Я&nbsp;люблю слушать музыку, а&nbsp;ещё увлекаюсь бегом. Недавно начал кодить. С&nbsp;2015 года работал в&nbsp;компании &laquo;СКБ Контур&raquo;. После того, как прошёл курс по&nbsp;веб-разработке, начал заниматься фриланс-заказами и&nbsp;ушёл с&nbsp;постоянной работы.</p>
                <a className="aboutMe__info-profile" href="https://github.com/VladimirIvancha">Github</a>
            </div>
            <div className="aboutMe__info-photo"></div>
        </div>
      </div>
    );
}

export default memo(AboutMe);