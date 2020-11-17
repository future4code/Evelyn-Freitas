import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from '../components/HomePage/HomePage';
import LoginPage from '../components/LoginPage/LoginPage';
import ApplicationFormPage from '../screens/ApplicationFormPage/ApplicationFormPage';
import CreateTripPage from '../screens/CreateTripPage/CreateTripPage';
import ListTripsPage from '../components/ListTripsPage/ListTripsPage';
import TripDetailsPage from '../components/TripDetailsPage/TripDetailsPage';

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
                <Route exact path="/aplication-form">
                    <ApplicationFormPage />
                </Route>
                <Route exact path="/trips/create">
                    <CreateTripPage />
                </Route>
                <Route exact path="/trips/list">
                    <ListTripsPage />
                </Route>
                <Route exact path="/trips/details">
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
