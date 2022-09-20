import "../../index.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Profile from "../Profile/Profile"
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Footer from "../Footer/Footer";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import * as auth from "../../utils/auth";
import { initialCards } from "../../utils/initialCards";
import React, { useState } from "react";
// import { api } from "../utils/api";
// import { useEffect } from "react";
import { memo } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
// import InfoTooltip from "./InfoTooltip";
import success from "../../images/success.svg";
import unSuccess from "../../images/unSuccess.svg";
import Navigation from "../Navigation/Navigation";

function App() {
  const history = useHistory();

  const [currentUser, setCurrentUser] = useState({name: "Владимир"});

//   const [isSubmitInLoading, setIsSubmitInLoading] = useState(false);
//   const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
//   const [selectedCard, setSelectedCard] = useState({ name: " ", link: " " });

  const [IsShortMoviesCheckBoxOn, setIsShortMoviesCheckBoxOn] = useState(false);
  const [cards, setCards] = useState(initialCards);
  const [loggedIn, setLoggedIn] = useState(true);
  const [isNavigationOpen, setisNavigationOpen] = useState(false);

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState({ img: "", text: "" });

//   useEffect(() => {
//     if (loggedIn) {
//       Promise.all([api.getUserInfo(), api.getInitialCards()])
//         .then(([user, cards]) => {
//           setCurrentUser(user);
//           setCards(cards.reverse());
//         })
//         .catch((err) => {console.log("Ошибка! Что-то пошло не так!")});
//       tokenCheck();
//     }
//   }, [loggedIn]);

  function handleCardLike(card) {
    setCards(
        cards.map((item) =>
        item.nameRU === card.nameRU ? { ...item, isLiked: !item.isLiked } : item
        )
    );
  }

  function handleShortMoviesFilter(card) {
    if (IsShortMoviesCheckBoxOn === false) {
    setCards(
        cards.filter(function (item) {
            if(item.duration <= 60) {
                return true;
            }
        })
    );
    setIsShortMoviesCheckBoxOn(true);
    }
    else {
        setCards(initialCards);
        setIsShortMoviesCheckBoxOn(false);
    }
  };

  const likedCards = cards.filter(function (item) {
    if(item.isLiked === true) {
        return true;
    }
  });

  function handleNavBtnClick() {
    setisNavigationOpen(true);
  }

//   function handleUpdateUser({ name, about }) {
//     setIsSubmitInLoading(true);
//     setIsSubmitSuccess(false);
//     api.patchUserInfo({ name, about })
//       .then((user) => {
//         setCurrentUser(user);
//         setIsSubmitSuccess(true);
//         closeAllPopups();
//       })
//       .catch((err) => {console.log("Ошибка! Что-то пошло не так!");
//       })
//       .finally(() => {
//         setIsSubmitInLoading(false);
//       });
//   }

  function closeAllPopups() {
    setisNavigationOpen(false);
  }

//   useEffect(() => {
//     tokenCheck();
//   }, []);

//   function tokenCheck() {
//     const jwt = localStorage.getItem("jwt");

//     if (jwt) {
//       auth.getCheckToken(jwt)
//         .then((res) => {
//           if (res) {
//             setLoggedIn(true);
//             setEmail(res.email);
//             history.push("/");
//           }
//         })
//         .catch((err) => console.log(err));
//     }
//   }

  function handleRegistration(password, email) {
    auth.register(password, email)
      .then((res) => {
        if (res.statusCode !== 201)
          setEmail(res.email)
        history.push('/sign-in')
      })
      .then(() => setMessage({ img: success, text: 'Вы успешно зарегистрировались!' }))
      .catch(() => setMessage({img: unSuccess, text: "Что-то пошло не так! Попробуйте ещё раз."}))
    //   .finally(() => setIsInfoTooltipOpen(true))
  }

  function handleAuth(password, email) {
    auth.authorize(password, email)
    .then((token) => {
      auth.getCheckToken(token)
        .then((res) => {
          setLoggedIn(true);
          setEmail(res.email);
          history.push("/");
        })
    })
    .then(() => setMessage({ img: success, text: 'Вы успешно вошли!' }))
    .catch(() => setMessage({ img: unSuccess, text: 'Что-то пошло не так! Попробуйте ещё раз.' }))
    // .finally(() => setIsInfoTooltipOpen(true))
  }

  function onSignOut() {
    localStorage.removeItem("jwt");
    setLoggedIn(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Switch>
          <Route exact path="/">
            <Header
              // email={email} 
              loggedIn={loggedIn} 
              // onSignOut={onSignOut} 
            />
            <Main />
            <Footer />
          </Route>
          <Route path="/sign-in">
            <Register
              onRegister={handleRegistration}
            />
          </Route>
          <Route path="/sign-up">
            <Login 
            onAuth={handleAuth} 
            />
          </Route>
          <ProtectedRoute
            loggedIn={loggedIn}
            onNavBtnClick={handleNavBtnClick}
            isNavigationOpen={isNavigationOpen}
            closeAllPopups={closeAllPopups}
            exact path="/movies"
            component={Movies}
            // onEditProfile={handleEditProfileClick}
            // onAddPlace={handleAddPlaceClick}
            // onEditAvatar={handleEditAvatarClick}
            // onCardClick={handleCardClick}
            // onTrashClick={handleTrashButtonClick}
            // closeAllPopups={closeAllPopups}
            // onUpdateUser={handleUpdateUser}
            // onUpdateAvatar={handleUpdateAvatar}
            onCardLike={handleCardLike}
            // onCardDelete={handleCardDelete}
            // onAddPlaceSubmit={handleAddPlaceSubmit}
            cards={cards}
            onShortMoviesFilter={handleShortMoviesFilter}
            // isOpenEditProfile={isOpenEditProfile}
            // isAddPlacePopupOpen={isAddPlacePopupOpen}
            // isEditAvatarPopupOpen={isEditAvatarPopupOpen}
            // isDeletePlacePopupOpen={isDeletePlacePopupOpen}
            // isImagePopupOpen={isImagePopupOpen}
            // isSubmitInLoading={isSubmitInLoading}
            // isSubmitSuccess={isSubmitSuccess}
            // selectedCard={selectedCard}
          />
          <ProtectedRoute
            loggedIn={loggedIn}
            onNavBtnClick={handleNavBtnClick}
            isNavigationOpen={isNavigationOpen}
            closeAllPopups={closeAllPopups}
            exact path="/saved-movies"
            component={SavedMovies}
            // onEditProfile={handleEditProfileClick}
            // onAddPlace={handleAddPlaceClick}
            // onEditAvatar={handleEditAvatarClick}
            // onCardClick={handleCardClick}
            // onTrashClick={handleTrashButtonClick}
            // closeAllPopups={closeAllPopups}
            // onUpdateUser={handleUpdateUser}
            // onUpdateAvatar={handleUpdateAvatar}
            // onCardLike={handleCardLike}
            // onCardDelete={handleCardDelete}
            // onAddPlaceSubmit={handleAddPlaceSubmit}
            cards={likedCards}
            onShortMoviesFilter={handleShortMoviesFilter}
            // isOpenEditProfile={isOpenEditProfile}
            // isAddPlacePopupOpen={isAddPlacePopupOpen}
            // isEditAvatarPopupOpen={isEditAvatarPopupOpen}
            // isDeletePlacePopupOpen={isDeletePlacePopupOpen}
            // isImagePopupOpen={isImagePopupOpen}
            // isSubmitInLoading={isSubmitInLoading}
            // isSubmitSuccess={isSubmitSuccess}
            // selectedCard={selectedCard}
          />
          <ProtectedRoute
            loggedIn={loggedIn}
            onNavBtnClick={handleNavBtnClick}
            isNavigationOpen={isNavigationOpen}
            closeAllPopups={closeAllPopups}
            exact path="/profile"
            component={Profile}
            onSignOut={onSignOut}
            // onEditProfile={handleEditProfileClick}
            // onAddPlace={handleAddPlaceClick}
            // onEditAvatar={handleEditAvatarClick}
            // onCardClick={handleCardClick}
            // onTrashClick={handleTrashButtonClick}
            // closeAllPopups={closeAllPopups}
            // onUpdateUser={handleUpdateUser}
            // onUpdateAvatar={handleUpdateAvatar}
            // onCardLike={handleCardLike}
            // onCardDelete={handleCardDelete}
            // onAddPlaceSubmit={handleAddPlaceSubmit}
            // cards={cards}
            // isOpenEditProfile={isOpenEditProfile}
            // isAddPlacePopupOpen={isAddPlacePopupOpen}
            // isEditAvatarPopupOpen={isEditAvatarPopupOpen}
            // isDeletePlacePopupOpen={isDeletePlacePopupOpen}
            // isImagePopupOpen={isImagePopupOpen}
            // isSubmitInLoading={isSubmitInLoading}
            // isSubmitSuccess={isSubmitSuccess}
            // selectedCard={selectedCard}
          />
          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default memo(App);
