import React from 'react';
import { useHistory } from 'react-router-dom';
import { FormContainer } from '../../styles/styles';
import { useInput } from '../../hooks/useInput';

export default function ApplicationFormPage() {
    const [name, handleName] = useInput();
    const [age, handleAge] = useInput();
    const [applicationText, handleApplicationText] = useInput();
    const [job, handleJob] = useInput();
    const [country, handleCountry] = useInput();
    const history = useHistory();
    
    return (
        <FormContainer>
            <p>Formulário de candidatura</p>
            <label>Nome do candidato: </label>
            <input value={name} onChange={handleName} />
            <label>Idade: </label>
            <input type='number' value={age} onChange={handleAge}></input>
            <label>Explique por que você é uma boa pessoa candidata: </label>
            <input value={applicationText} onChange={handleApplicationText} />
            <label>Profissão:</label>
            <input value={job} onChange={handleJob} />
            <label>Países: </label>
            <input value={country} onChange={handleCountry} />
            <button>Enviar</button>
        </FormContainer>
    );
}