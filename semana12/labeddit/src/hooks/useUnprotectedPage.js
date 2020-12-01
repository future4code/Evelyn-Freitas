import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { goToFeed } from '../router/coordinator';

export const useProtectedPage = () => {
    const history = useHistory();

    useEffect(() => {
        const token = window.localStorage.getItem('token');

        if (token) {
            goToFeed(history);
        }
    }, [history]);
}