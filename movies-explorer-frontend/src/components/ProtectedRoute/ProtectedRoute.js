import React from 'react';
import { Route, Redirect } from "react-router-dom";
import Footer from '../Footer/Footer';
import Header from "../Header/Header";

const ProtectedRoute = ({component: Component, ...props}) => {
  return (
    <>
        <Header
            loggedIn={props.loggedIn}
            path={props.path}
        />
        <main className='main'>
            <Route path={props.path}>
            {
                () => props.loggedIn ? <Component {...props} /> : <Redirect to="./sign-in"/>
            }
            </Route>
        </main>
        <Footer 
            needFooter={props.needFooter}
        />
    </>
)};

export default ProtectedRoute;