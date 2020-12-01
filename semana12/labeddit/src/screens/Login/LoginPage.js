import React from 'react';
import { login } from '../../services/user';
import { useHistory } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { useUnprotectedPage } from '../../hooks/useUnprotectedPage';
import { FormContainer, LoginPageContainer } from './styles';

import { TextField, Button } from '@material-ui/core'

export default function LoginPage() {
    useUnprotectedPage();
    const history = useHistory();
    const { form, onChange } = useForm({ email: '', password: '' });

    const handleInputChange = (event) => {
        const { value, name } = event.target;
        onChange(value, name);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(form, history);
    }

    return (
        <LoginPageContainer>
            <FormContainer onSubmit={handleSubmit} >
                <TextField
                    label="E-mail"
                    variant="outlined"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleInputChange}
                />
                <TextField
                    label="Senha"
                    variant="outlined"
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleInputChange}
                />
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                >
                    Login
                </Button>
            </FormContainer>
            <Button
                color="primary"
            >
                Não tem cadastro? Clique aqui
            </Button>
        </LoginPageContainer>
    );
}