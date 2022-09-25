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
            />
            <Main />
            <Footer />
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
          />
          <ProtectedRoute
            loggedIn={loggedIn}
            exact path="/saved-movies"
            component={SavedMovies}
            cards={likedCards}
            onShortMoviesFilter={handleShortMoviesFilter}
            needFooter={true}
          />
          <ProtectedRoute
            loggedIn={loggedIn}
            exact path="/profile"
            component={Profile}
            onSignOut={onSignOut}
            needFooter={false}
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
