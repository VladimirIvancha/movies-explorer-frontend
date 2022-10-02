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
import * as auth from "../../utils/auth.js";
import { mainApi } from "../../utils/MainApi";
import React, { useState, useEffect } from "react";
import { memo } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { initialCardQuantity } from "../../utils/initialCardQuantity";

function App() {
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState({});
  const [isNavigationOpen, setisNavigationOpen] = useState(false);
  const [renderCardsQuantity, setRenderCardsQuantity] = useState(initialCardQuantity);
  const [loggedIn, setLoggedIn] = useState(false);
  
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (loggedIn) {
      mainApi.getUserInfo(loggedIn)
        .then((user) => {
          if (user) {
            localStorage.setItem('userId', user._id);
            setCurrentUser(user);
          };
        })
        .catch((err) => {console.log("Ошибка! Что-то пошло не так!")});
      tokenCheck();
    }
  }, []);

  function handleNavBtnClick() {
    setisNavigationOpen(true);
  }

  function handleNavigationClose() {
    setisNavigationOpen(false);
  }

  useEffect(() => {
    tokenCheck();
  }, []);

  function tokenCheck() {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      auth.getCheckToken(jwt)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            history.push("/");
          }
        })
        .catch((err) => console.log(err));
    }
  }

  function handleAuth(email, password) {
    auth.authorize(email, password)
    .then((token) => {
      auth.getCheckToken(token)
        .then((res) => {
          setLoggedIn(true);
          history.push("/");
        })
    })
    .then(() => setMessage('Вы успешно вошли!'))
    .catch(() => setMessage('Что-то пошло не так! Попробуйте ещё раз.'))
  }

  function handleRegistration(email, password, name) {
    auth.register(email, password, name)
      .then((res) => {
        if (res.statusCode !== 201)
          // setEmail(res.email)
        history.push('/sign-in')
      })
      .then(() => setMessage('Вы успешно зарегистрировались!'))
      .catch(() => setMessage('Что-то пошло не так! Попробуйте ещё раз.'))
  }

  function handleResetStates() {
    setisNavigationOpen(false);
    setRenderCardsQuantity(initialCardQuantity);
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
              resetStates={handleResetStates}
            />
            <Main />
            <Footer 
              needFooter={true}
            />
          </Route>
          <Route path="/sign-up">
            <Register
              onRegister={handleRegistration}
            />
          </Route>
          <Route path="/sign-in">
            <Login
              onAuth={handleAuth}
            />
          </Route>
          <ProtectedRoute
            loggedIn={loggedIn}
            exact path="/movies"
            component={Movies}
            needFooter={true}
            isNavigationOpen={isNavigationOpen}
            handleNavBtnClick={handleNavBtnClick}
            handleNavigationClose={handleNavigationClose}
            resetStates={handleResetStates}
            renderCardsQuantity={renderCardsQuantity}
            setRenderCardsQuantity={setRenderCardsQuantity}
          />
          <ProtectedRoute
            loggedIn={loggedIn}
            exact path="/saved-movies"
            component={SavedMovies}
            needFooter={true}
            isNavigationOpen={isNavigationOpen}
            handleNavBtnClick={handleNavBtnClick}
            handleNavigationClose={handleNavigationClose}
            resetStates={handleResetStates}
            renderCardsQuantity={renderCardsQuantity}
            setRenderCardsQuantity={setRenderCardsQuantity}
          />
          <ProtectedRoute
            loggedIn={loggedIn}
            exact path="/profile"
            component={Profile}
            needFooter={false}
            setLoggedIn={setLoggedIn}
            isNavigationOpen={isNavigationOpen}
            handleNavBtnClick={handleNavBtnClick}
            handleNavigationClose={handleNavigationClose}
            resetStates={handleResetStates}
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
