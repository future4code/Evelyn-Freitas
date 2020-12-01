import React from 'react';
import useForm from '../../hooks/useForm';
import { FormContainer } from './styles';
import { login } from '../../services/user';
import { useHistory } from 'react-router-dom';

export default function LoginPage() {
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
        <div>
            <FormContainer>
                <form onSubmit={handleSubmit}>
                    <input
                        type='email'
                        name='email'
                        value={form.email}
                        onChange={handleInputChange}
                        placeholder='email' />
                    <input
                        type='password'
                        name='password'
                        value={form.password}
                        onChange={handleInputChange}
                        placeholder='password' />
                    <button>Entrar</button>
                    <button>Cadastrar</button>
                </form>
            </FormContainer>
        </div>
    );
}