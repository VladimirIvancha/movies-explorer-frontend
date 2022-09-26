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
import { initialCards } from "../../utils/initialCards";
import React, { useState } from "react";
import { memo } from "react";
import { Route, Switch } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function App() {

  const [currentUser, setCurrentUser] = useState({name: "Владимир"});

  const [IsShortMoviesCheckBoxOn, setIsShortMoviesCheckBoxOn] = useState(false);
  const [isNavigationOpen, setisNavigationOpen] = useState(false);
  const [needMoreCards, setNeedMoreCards] = useState(false);
  const [cards, setCards] = useState(initialCards);
  const [loggedIn, setLoggedIn] = useState(true);

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
    } else {
      setCards(initialCards);
      setIsShortMoviesCheckBoxOn(false);
    }
  };

  function resetFilterCheckBox() {
    setCards(initialCards);
    setIsShortMoviesCheckBoxOn(false);
  }

  function handleNavBtnClick() {
    setisNavigationOpen(true);
  }

  function showMoreCards() {
    if (needMoreCards === false) {
      setNeedMoreCards(true);
    } else {
      setNeedMoreCards(false);
    }
  }

  function closeAllPopups() {
    setisNavigationOpen(false);
    setCards(initialCards);
    setIsShortMoviesCheckBoxOn(false);
    setNeedMoreCards(false);
  }

  const likedCards = cards.filter(function (item) {
    if(item.isLiked === true) {
        return true;
    }
  });

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
              loggedIn={loggedIn}
              isNavigationOpen={isNavigationOpen}
              handleNavBtnClick={handleNavBtnClick}
              closeAllPopups={closeAllPopups}
            />
            <Main />
            <Footer 
              needFooter={true}
            />
          </Route>
          <Route path="/sign-in">
            <Register
            />
          </Route>
          <Route path="/sign-up">
            <Login
            />
          </Route>
          <ProtectedRoute
            loggedIn={loggedIn}
            exact path="/movies"
            component={Movies}
            onCardLike={handleCardLike}
            cards={cards}
            onShortMoviesFilter={handleShortMoviesFilter}
            needFooter={true}
            resetFilterCheckBox={resetFilterCheckBox}
            isNavigationOpen={isNavigationOpen}
            handleNavBtnClick={handleNavBtnClick}
            closeAllPopups={closeAllPopups}
            showMoreCards={showMoreCards}
            needMoreCards={needMoreCards}
          />
          <ProtectedRoute
            loggedIn={loggedIn}
            exact path="/saved-movies"
            component={SavedMovies}
            cards={likedCards}
            onShortMoviesFilter={handleShortMoviesFilter}
            needFooter={true}
            resetFilterCheckBox={resetFilterCheckBox}
            isNavigationOpen={isNavigationOpen}
            handleNavBtnClick={handleNavBtnClick}
            closeAllPopups={closeAllPopups}
            showMoreCards={showMoreCards}
            needMoreCards={needMoreCards}
          />
          <ProtectedRoute
            loggedIn={loggedIn}
            exact path="/profile"
            component={Profile}
            onSignOut={onSignOut}
            needFooter={false}
            isNavigationOpen={isNavigationOpen}
            handleNavBtnClick={handleNavBtnClick}
            closeAllPopups={closeAllPopups}
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
