import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import useForm from '../../hooks/useForm';
 
export default function LoginPage() {
    const [form, onChange] = useForm({ email: '', password: '' })
    const history = useHistory();

    //token fica gravado e redireciona automaticamente
    // useEffect(() => {
    //     const token = localStorage.getItem("token");
    //     if (token) {
    //         history.push('/trip/details')
    //     }
    // }

    const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/evelyn-dantas-dumont/login';

    const loginRequest = (event) => {
        const body = {
            email: form.email,
            password: form.password
        };
        
        event.preventDefault();

        axios
        .post(baseUrl, body)
        .then(response => {
            localStorage.setItem('token', response.data.token);
            history.push('/trips/list')
        })
        .catch((error) => {
            console.log(error);
        })
    };

    return (
        <div>
          <form onSubmit={loginRequest}>
            <p>Login Page</p>
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
                <button>Fazer login</button>
          </form>
        </div>
    );
}