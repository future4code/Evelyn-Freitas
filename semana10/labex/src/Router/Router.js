import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from '../screens/HomePage/HomePage';
import LoginPage from '../screens/LoginPage/LoginPage';
import ApplicationFormPage from '../screens/ApplicationFormPage/ApplicationFormPage';
import CreateTripPage from '../screens/CreateTripPage/CreateTripPage';
import ListTripsPage from '../screens/ListTripsPage/ListTripsPage';
import TripDetailsPage from '../screens/TripDetailsPage/TripDetailsPage';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route exact path="/login">
                    <LoginPage />
                </Route>
                <Route exact path="/form">
                    <ApplicationFormPage />
                </Route>
                <Route exact path="/trips/create">
                    <CreateTripPage />
                </Route>
                <Route exact path="/trips">
                    <ListTripsPage />
                </Route>
                <Route exact path="/trips/details/:tripId">
                    <TripDetailsPage />
                </Route>
                <Router>
                    <p>Ops, erro 404 :/</p>
                </Router>
            </Switch>
        </BrowserRouter>
    );
}

export default Router;
