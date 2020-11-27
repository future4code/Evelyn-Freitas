import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { LoginForm } from '../../styles/styles';
import { TextField, Button } from '@material-ui/core'
import PageTitle from '../../components/PageTitle/PageTitle'
 
export default function LoginPage() {
    const [form, onChange] = useForm({ email: '', password: '' })
    const history = useHistory();

    const goToTripDetailsPage = () => {
        history.push('/trips')
    };

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
            window.localStorage.setItem('token', response.data.token)
            goToTripDetailsPage();
        })
        .catch((error) => {
            console.log(error);
        })
    };

    return (
        <div>
            <PageTitle title={'Login'}/>
            <LoginForm onSubmit={loginRequest}>
                <TextField 
                    name={'email'} 
                    type={'email'}
                    value={form.email} 
                    onChange={onChange} 
                    placeholder='email do usuário' 
                    required
                    />
                <TextField 
                    name={'password'}
                    type={'password'} 
                    value={form.password} 
                    onChange={onChange} 
                    placeholder='senha do usuário' 
                    required 
                    />
                <Button variant={'contained'} color={'primary'} type={'submit'}>Fazer login</Button>
            </LoginForm>
        </div>
    );
}