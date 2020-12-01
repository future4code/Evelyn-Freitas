import React from 'react';
import { useHistory } from 'react-router-dom'
import AppNavBar from '../../components/AppNavBar/AppNavBar';
import { goToLogin, goToSignUp } from '../../router/coordinator';

export default function FeedPage() {
    const history = useHistory();

    return (
        <div>
            <AppNavBar />
        </div>
    );
}

