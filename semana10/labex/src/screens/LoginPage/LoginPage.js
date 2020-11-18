import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    //token fica gravado e redireciona automaticamente
    // useEffect(() => {
    //     const token = localStorage.getItem("token");
    //     if (token) {
    //         history.push('/trip/details')
    //     }
    // }

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const login = () => {
        const body = {
            email: email,
            password: password
        };

        axios
        .post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/evelyn-dantas-dumont/login', body)
        .then(response => {
            localStorage.setItem('token', response.data.token);
            history.push('/trips/details')
        })
        .catch((error) => {
            console.log(error);
        })
    };

    return (
        <div>
            <p>Login Page</p>
            <label>email: </label>
            <input value={email} onChange={handleEmail} placeholder='email do usuário'/>
            <label>senha: </label>
            <input value={password} onChange={handlePassword} placeholder='senha do usuário'/>
            <button onClick={login}>Fazer login</button>
        </div>
    );
}