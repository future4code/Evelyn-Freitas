import React from 'react'
import { useHistory } from 'react-router-dom';

export default function AdmHomePage() {
    const history = useHistory();
    
    const goToLoginPage = () => {
        history.push('/login');
    }

    const goToSingUpPage = () => {
        history.push('/sing-up')
    }
    
    return (
        <div>
            <p>Administrador</p>
            <button onClick={goToLoginPage}>Login</button>
            <button onClick={goToSingUpPage}>Cadastrar</button>
        </div>
    )
}