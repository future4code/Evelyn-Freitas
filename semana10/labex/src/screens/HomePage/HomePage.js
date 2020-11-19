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

    const goToSingUpPage = () => {
        history.push('/sing-up')
    }

    return (
        <div>
            <p>Home Page</p>
            <button onClick={goToLoginPage}>Login</button>
            <button onClick={goToSingUpPage}>Cadastrar</button>
            <button onClick={goToListTripsPage}>Viagens disponíveis</button>
        </div>
    );
}