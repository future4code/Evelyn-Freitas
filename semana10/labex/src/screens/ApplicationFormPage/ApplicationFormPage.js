import React from 'react';
import { FormContainer } from '../../styles/styles';

export default function ApplicationFormPage() {
    return (
        <FormContainer>
            <p>Application Form Page</p>
            <label>Nome do candidato: </label>
            <input />
            <label>Idade: </label>
            <input type='number'></input>
            <label>Explique por que você é uma boa pessoa candidata: </label>
            <input />
            <label>Profissão:</label>
            <input />
            <label>Países: </label>
            <select>
                <option></option>
            </select>
        </FormContainer>
    );
}