import React from 'react';

export default function LoginPage() {
    return (
        <div>
            <form>
                <input placeholder='Email' />
                <input placeholder='Senha' />
                <button>Entrar</button>
                <button>Cadastrar</button>
            </form>
        </div>
    );
}