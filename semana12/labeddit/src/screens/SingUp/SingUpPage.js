import React from 'react';
import useForm from '../../hooks/useForm';

export default function SingUpPage() {
    const { form, onChange } = useForm({ username: '', email: '', password: '' });

    const handleInputChange = (event) => {
        const { value, name } = event.target;
        onChange(value, name);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    name='username'
                    value={form.username}
                    onChange={handleInputChange}
                />
                <input
                    name='email'
                    value={form.email}
                    onChange={handleInputChange}
                />
                <input
                    name='password'
                    value={form.password}
                    onChange={handleInputChange}
                />
                <button>Cadastrar</button>
            </form>
        </div>
    );
}
