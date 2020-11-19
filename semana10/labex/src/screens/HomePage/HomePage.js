import React from 'react';
import { useHistory } from 'react-router-dom';

export default function HomePage() {
    const history = useHistory();
    
    const goToListTripsPage = () => {
        history.push('/trips/list');
    }

    const goToAdmHomePage = () => {
        history.push('/adm');
    }

    const goToApplicationFormPage = () => {
        history.push('/form')
    }

    return (
        <div>
            <div>
                <button onClick={goToAdmHomePage}>Página Adm</button>
            </div>
            <p>Logo</p>
            <p>Venha conferir nossas viagens espaciais! É coisa de outro... Planeta! :D</p>
            <button onClick={goToListTripsPage}>Viagens disponíveis</button>
            <button onClick={goToApplicationFormPage}>Formmulário de candidatura</button>
        </div>
    );
}