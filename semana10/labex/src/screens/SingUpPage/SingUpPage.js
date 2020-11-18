import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleNewEmail = (event) => {
        setEmail(event.target.value)
    }

    const handleNewPassword = (event) => {
        setPassword(event.target.value)
    }

    const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/evelyn-dantas-dumont/signup';

    const newLogin = () => {
        const body = {
            email: email,
            password: password
        };

        axios
        .post(baseUrl, body)
        .then(response => {
            localStorage.setItem('token', response.data.token);
            history.push('/login')
            alert('Usuário cadastrado com sucesso!')
        })
        .catch((error) => {
            console.log(error);
        })
    };

    return (
        <div>
            <p>Novo cadastro</p>
            <label>email: </label>
            <input value={email} onChange={handleNewEmail} placeholder='email do usuário'/>
            <label>senha: </label>
            <input value={password} onChange={handleNewPassword} placeholder='senha do usuário'/>
            <button onClick={newLogin}>Cadastrar</button>
        </div>
    );
}