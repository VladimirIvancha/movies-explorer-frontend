import React from 'react';
import { Route, Redirect } from "react-router-dom";
import Header from "../Header/Header";

const ProtectedRoute = ({component: Component, ...props}) => {
  return (
    <>
        <Header
            loggedIn={props.loggedIn}
            path={props.path}
            onNavBtnClick={props.onNavBtnClick}
            isNavigationOpen={props.isNavigationOpen}
            closeAllPopups={props.closeAllPopups}
        />
        <Route path={props.path}>
        {
            () => props.loggedIn ? <Component {...props} /> : <Redirect to="./sign-in"/>
        }
        </Route>
    </>
)};

export default ProtectedRoute;