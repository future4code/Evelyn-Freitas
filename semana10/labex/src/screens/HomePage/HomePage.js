import React from 'react';
import { useHistory } from 'react-router-dom';

export default function HomePage() {
    const history = useHistory();
    
    const goToApplicationFormPage = () => {
        history.push('/form');
    }

    const goToLoginPage = () => {
        history.push('/login');
    }

    const goToSingUpPage = () => {
        history.push('/sing-up')
    }

    return (
        <div>
            <p>Home Page</p>
            <button onClick={goToApplicationFormPage}>Application form</button>
            <button onClick={goToLoginPage}>Login</button>
            <button onClick={goToSingUpPage}>Cadastrar</button>
        </div>
    );
}