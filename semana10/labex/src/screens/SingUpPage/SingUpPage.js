import React from 'react';
import axios from 'axios';
import useForm from '../../hooks/useForm';
import { useHistory } from 'react-router-dom';


export default function LoginPage() {
    const [form, onChange] = useForm({ email: '', password: '' })
    const history = useHistory();

    const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/evelyn-dantas-dumont/signup';

    const newLogin = (event) => {
        const body = {
            email: form.email,
            password: form.password
        };

        event.presentDefautl();

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
            <form onSubmit={newLogin}>
                <p>Novo cadastro</p>
                <input 
                    name={'email'}
                    type={'email'} 
                    value={form.email} 
                    onChange={onChange} 
                    placeholder='email do usuário' 
                    required 
                />
                <input 
                    name={'password'}
                    type={'password'} 
                    value={form.password} 
                    onChange={onChange} 
                    placeholder='senha do usuário' 
                    required 
                />
                <button onClick={newLogin}>Cadastrar</button>
            </form>
        </div>
    );
}