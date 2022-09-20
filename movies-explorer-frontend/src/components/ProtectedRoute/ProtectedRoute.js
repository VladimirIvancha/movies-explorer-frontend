import React from 'react';
import { Route, Redirect } from "react-router-dom";
import Header from "../Header/Header";
import Navigation from '../Navigation/Navigation';

const ProtectedRoute = ({component: Component, ...props}) => {
  return (
    <>
        <Header
            loggedIn={props.loggedIn}
            path={props.path}
        />
        <Route path={props.path}>
        {
            () => props.loggedIn ? <Component {...props} /> : <Redirect to="./sign-in"/>
        }
        </Route>
    </>
)};

export default ProtectedRoute;