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
import { initialCardQuantity } from "../../utils/initialCardQuantity";
import { likedCards } from "../../utils/likedCards";
// import { api } from "../utils/api";
import { moviesApi } from "../../utils/MoviesApi";
import React, { useState, useEffect } from "react";
import { memo } from "react";
import { Route, Switch } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function App() {

  const [currentUser, setCurrentUser] = useState({name: "Владимир"});

  const [IsShortMoviesCheckBoxOn, setIsShortMoviesCheckBoxOn] = useState(false);
  const [isNavigationOpen, setisNavigationOpen] = useState(false);
  const [noMoreCards, setNoMoreCards] = useState(false);
  const [cards, setCards] = useState([]);
  const [initialCards, setInitialCards] = useState([]);
  const [loggedIn, setLoggedIn] = useState(true);
  const [renderCardsQuantity, setRenderCardsQuantity] = useState(initialCardQuantity);

  useEffect(() => {
    if (loggedIn && !IsShortMoviesCheckBoxOn) {
      Promise.all([moviesApi.getInitialCards()])
        .then(([cards]) => {
          setInitialCards(cards);
          setCards(cards);
        })
        .catch((err) => {console.log("Ошибка! Что-то пошло не так!")});
    }
  }, [loggedIn, 
      IsShortMoviesCheckBoxOn,
    ]);

  useEffect(() => {
    if (cards.length <= renderCardsQuantity) {
      setNoMoreCards(true);
    } else {
      setNoMoreCards(false);
    }
  }, [cards.length, renderCardsQuantity]);
  
  useEffect(() => {
    window.addEventListener('resize', updateScreenWidth);
  });

  function updateScreenWidth() {
    setNoMoreCards(false);
    function onResize() {
      setRenderCardsQuantity(initialCardQuantity);
    }
    const resizeTimeout = setTimeout(() => {onResize()}, 500);
    return () => clearTimeout(resizeTimeout);
  };

  function handleCardLike(card) {
    setCards(
      cards.slice(0, renderCardsQuantity).map((item) =>
        item.nameRU === card.nameRU ? { ...item, isLiked: !item.isLiked } : item
      )
    );
  }

  function handleNavBtnClick() {
    setisNavigationOpen(true);
  }

  function handleNavigationClose() {
    setisNavigationOpen(false);
  }

  function showMoreCards() {
    let widthWind = document.querySelector('body').offsetWidth;
    if (widthWind > 768) {
      let n=3;
      let newRenderCardsQuantity = renderCardsQuantity+n
      setRenderCardsQuantity(newRenderCardsQuantity);
    } else if (widthWind <= 768) {
      let n=2;
      let newRenderCardsQuantity = renderCardsQuantity+n
      setRenderCardsQuantity(newRenderCardsQuantity);
    };
  }

  function resetForMoviesLink() {
    setisNavigationOpen(false);
    setCards(cards);
    setRenderCardsQuantity(initialCardQuantity);
    setIsShortMoviesCheckBoxOn(false);
  }

  function resetForSavedMoviesLink() {
    setisNavigationOpen(false);
    setCards(likedCards);
    setRenderCardsQuantity(initialCardQuantity);
    setIsShortMoviesCheckBoxOn(false);
  }

  function resetStates() {
    setisNavigationOpen(false);
    setRenderCardsQuantity(initialCardQuantity);
    setIsShortMoviesCheckBoxOn(false);
  }

  function handleShortMoviesFilter() {
    if (IsShortMoviesCheckBoxOn === false) {
      setCards(
        cards.filter(function (item) {
              if(item.duration <= 40) {
                return true;
              }
          })
      );
      setIsShortMoviesCheckBoxOn(true);
    } else {
      resetForMoviesLink();
    }
  };

  function handleShortSavedMoviesFilter() {
    if (IsShortMoviesCheckBoxOn === false) {
      setIsShortMoviesCheckBoxOn(true);
      setCards(
          cards.filter(function (item) {
              if(item.duration <= 40) {
                  return true;
              }
          })
      );
    } else {
      resetForSavedMoviesLink();
    };
  };

  function onSignOut() {
    localStorage.removeItem("jwt");
    setLoggedIn(false);
  }

  function handleUpdateMoviesKeyWords({ keyWords }) {
    setCards(
      initialCards.filter(function (item) {
        if(item.nameRU.toLowerCase().includes(keyWords)) {
          return true;
        }
      })
    );  
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
              handleNavigationClose={handleNavigationClose}
              resetStates={resetStates}
              resetForMoviesLink={resetForMoviesLink}
              resetForSavedMoviesLink={resetForSavedMoviesLink}
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
            IsShortMoviesCheckBoxOn={IsShortMoviesCheckBoxOn}
            isNavigationOpen={isNavigationOpen}
            handleNavBtnClick={handleNavBtnClick}
            handleNavigationClose={handleNavigationClose}
            resetStates={resetStates}
            resetForMoviesLink={resetForMoviesLink}
            resetForSavedMoviesLink={resetForSavedMoviesLink}
            showMoreCards={showMoreCards}
            noMoreCards={noMoreCards}
            renderCardsQuantity={renderCardsQuantity}
            onUpdateMoviesKeyWords={handleUpdateMoviesKeyWords}
          />
          <ProtectedRoute
            loggedIn={loggedIn}
            exact path="/saved-movies"
            component={SavedMovies}
            cards={cards}
            onShortMoviesFilter={handleShortSavedMoviesFilter}
            needFooter={true}
            IsShortMoviesCheckBoxOn={IsShortMoviesCheckBoxOn}
            isNavigationOpen={isNavigationOpen}
            handleNavBtnClick={handleNavBtnClick}
            handleNavigationClose={handleNavigationClose}
            resetStates={resetStates}
            resetForMoviesLink={resetForMoviesLink}
            resetForSavedMoviesLink={resetForSavedMoviesLink}
            showMoreCards={showMoreCards}
            noMoreCards={noMoreCards}
            renderCardsQuantity={renderCardsQuantity}
          />
          <ProtectedRoute
            loggedIn={loggedIn}
            exact path="/profile"
            component={Profile}
            onSignOut={onSignOut}
            needFooter={false}
            isNavigationOpen={isNavigationOpen}
            handleNavBtnClick={handleNavBtnClick}
            handleNavigationClose={handleNavigationClose}
            resetStates={resetStates}
            resetForMoviesLink={resetForMoviesLink}
            resetForSavedMoviesLink={resetForSavedMoviesLink}
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
