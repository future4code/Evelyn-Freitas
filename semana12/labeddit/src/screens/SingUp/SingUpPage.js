import React from 'react';
import { useForm } from "../../hooks/useForm"
import { FormContainer, SignupPageContainer } from './styles';
import { useHistory } from 'react-router-dom';
import { signup } from '../../services/user';

import { useUnprotectedPage } from '../../hooks/useUnprotectedPage';

import { TextField, Button } from '@material-ui/core'
import { goToSignUp, goToLogin } from '../../router/coordinator';

export default function SingUpPage() {
    useUnprotectedPage()
    const history = useHistory()
    const { form, onChange } = useForm({ username: '', email: '', password: '' });

    const handleInputChange = (event) => {
        const { value, name } = event.target;
        onChange(value, name);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        signup(form, history);
    }

    return (
        <SignupPageContainer>
            <FormContainer onSubmit={handleSubmit} >
                <TextField
                    label="Nome de usuário"
                    variant="outlined"
                    name="username"
                    value={form.username}
                    onChange={handleInputChange}
                    required
                />
                <TextField
                    label="E-mail"
                    variant="outlined"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleInputChange}
                    required
                />
                <TextField
                    label="Senha"
                    variant="outlined"
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleInputChange}
                    required
                />
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    onClick={() => goToLogin(history)}
                >
                    Cadastrar
                </Button>
            </FormContainer>
        </SignupPageContainer>
    );
}
