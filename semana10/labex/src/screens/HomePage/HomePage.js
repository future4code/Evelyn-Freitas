import React from 'react';
import { useHistory } from 'react-router-dom';

export default function HomePage() {
    const history = useHistory();
    
    const goToListTripsPage = () => {
        history.push('/trips/list');
    }

    const goToLoginPage = () => {
        history.push('/login');
    }

    const goToApplicationFormPage = () => {
        history.push('/form')
    }

    return (
        <div>
            <p>Home Page</p>
            <button onClick={goToLoginPage}>Login</button>
            <button onClick={goToListTripsPage}>Viagens disponíveis</button>
            <button onClick={goToApplicationFormPage}>Formmulário de candidatura</button>
        </div>
    );
}