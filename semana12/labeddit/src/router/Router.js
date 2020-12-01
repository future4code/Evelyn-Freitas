import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import LoginPage from '../screens/Login/LoginPage'
import SignUpPage from '../screens/SingUp/SingUpPage'
import FeedPage from '../screens/Feed/FeedPage'
import PostPage from '../screens/Posts/PostPage';
import ErrorPage from '../screens/Error/ErrorPage'

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={'/login'}>
                    <LoginPage />
                </Route>
                <Route exact path={'/cadastro'}>
                    <SignUpPage />
                </Route>
                <Route exact path={['/feed', '/']}>
                    <FeedPage />
                </Route>
                <Route exact path={'/posts/:id'}>
                    <PostPage />
                </Route>
                <Route>
                    <ErrorPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;