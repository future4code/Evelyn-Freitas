import React from 'react';
import { useHistory } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar';
import { goToLogin, goToSignUp } from '../../router/coordinator';

export default function FeedPage() {
    const history = useHistory();

    return (
        <div>
            <NavBar />
            <button type={'submit'} onClick={() => goToLogin(history)}>Login</button>
            <button type={'submit'} onClick={() => goToSignUp(history)}>Cadastrar</button>
        </div>
    );
}

