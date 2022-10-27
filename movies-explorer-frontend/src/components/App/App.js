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
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import * as auth from "../../utils/auth.js";
import { mainApi } from "../../utils/MainApi";
import React, { useState, useEffect, useMemo } from "react";
import { memo } from "react";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { initialCardQuantity } from "../../utils/initialCardQuantity";
import { TooltipContext } from "../../contexts/TooltipContext";
import { NO_CONNECTION_MESSAGE } from '../../utils/constants';

function App() {  
  const loggedIn = JSON.parse(localStorage.getItem('loggedIn')) || false;

  const history = useHistory();

  const [currentUser, setCurrentUser] = useState({});
  const userContext = useMemo(() => ({currentUser, setCurrentUser}), [currentUser]);
  const [tooltipMessage, setTooltipMessage] = useState('');
  const tooltipContext = useMemo(() => ({tooltipMessage, setTooltipMessage}), [tooltipMessage]);
  
  const [isNavigationOpen, setisNavigationOpen] = useState(false);
  const [renderCardsQuantity, setRenderCardsQuantity] = useState(initialCardQuantity);

  useEffect(() => {
    if (loggedIn) {
      mainApi.getUserInfo()
      .then((user) => {
        if (user) {
          localStorage.setItem('userId', user._id);
          setCurrentUser(user);
        };
      })
      .catch(() => {
        setTooltipMessage(NO_CONNECTION_MESSAGE);
        localStorage.clear();
        localStorage.setItem('loggedIn', false);
        setCurrentUser({});
        history.push("/");
      });
    }
  }, []);

  useEffect(() => {
    tokenCheck();
  }, []);

  function tokenCheck() {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      auth.getCheckToken(jwt)
        .then((user) => {
            setCurrentUser(user);
            localStorage.setItem('loggedIn', true);
        })
        .catch(() => {
          localStorage.setItem('loggedIn', false);
        })
    } else localStorage.setItem('loggedIn', false);
  }
  
  function handleResetStates() {
    setisNavigationOpen(false);
    setRenderCardsQuantity(initialCardQuantity);
  }

  function handleNavBtnClick() {
    setisNavigationOpen(true);
  }

  function handleNavigationClose() {
    setisNavigationOpen(false);
  }

  const handleSignout = (evt) => {
    evt.preventDefault();
    localStorage.clear();
    setCurrentUser({});
    mainApi.signOut()
      .catch((err) => console.log(err));
    history.push("/");
  };
  
  return (
    <CurrentUserContext.Provider value={userContext}>
      <TooltipContext.Provider value={tooltipContext}>
        <div className="page">
          <InfoTooltip message={tooltipMessage}/>
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
              {
                !loggedIn
                ? <Register />
                : <Redirect to='/movies' />
              }
            </Route>
            <Route path="/sign-in">
              {
                !loggedIn
                ? <Login />
                : <Redirect to='/movies' />
              }
            </Route>
            <ProtectedRoute
              loggedIn={loggedIn}
              path="/movies"
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
              path="/saved-movies"
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
              path="/profile"
              component={Profile}
              needFooter={false}
              isNavigationOpen={isNavigationOpen}
              handleSignout={handleSignout}
              handleNavBtnClick={handleNavBtnClick}
              handleNavigationClose={handleNavigationClose}
              resetStates={handleResetStates}
            />
            <Route path="*">
              <NotFoundPage />
            </Route>
          </Switch>
        </div>
      </TooltipContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default memo(App);
