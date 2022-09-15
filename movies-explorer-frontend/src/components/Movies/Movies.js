import React, { useContext, memo } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
// import Promo from "./Promo/Promo";
// import AboutProject from "./AboutProject/AboutProject";
// import Techs from "./Techs/Techs";
// import AboutMe from "./AboutMe/AboutMe";
// import Portfolio from "./Portfolio/Portfolio";
// import NavTab from "./NavTab/NavTab";
// import EditProfilePopup from "./EditProfilePopup";
// import EditAvatarPopup from "./EditAvatarPopup";
// import AddPlacePopup from "./AddPlacePopup";
// import DeletePopup from "./DeletePopup";
// import ImagePopup from "./ImagePopup";

function Movies({
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
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="movies">
        <SearchForm />
        <MoviesCardList 
        cards={cards}
        />
        <Footer />
        {/* <main className="content">
        <section className="profile">
            <div className="profile__wrapper">
           <div 
             className="profile__avatar"
             onClick={onEditAvatar}
              style={{ backgroundImage: `url(${currentUser.avatar})` }}
           ></div>
            <div className="profile__info">
              <div className="profile__title-wrapper">
               <div className="profile__text">
                  <h1 className="profile__title">{currentUser.name}</h1>
                  <p className="profile__subtitle">{currentUser.about}</p>
                  </div>
                  <button 
                    type="button" aria-label="редактировать" 
                    className="profile__edit-button"
                    onClick={onEditProfile}
               ></button>
              </div>
             </div>
            </div>
         <button 
           type="button" 
              aria-label="добавить" 
              className="profile__add-button"
              onClick={onAddPlace}
            ></button>
        </section>
        </main> */}
    </div>
  );
}
  
export default memo(Movies);