import React from 'react';

export default class FirstList extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <ol>
                        <li>Qual o seu nome?</li>
                        <input />
                        <li>Qual sua idade?</li>
                        <input />
                        <li>Qual seu email?</li>
                        <input />
                        <li>Qual sua escolaridade</li>
                        <select>
                            <option>Ensino Médio Incompleto</option>
                            <option>Ensino Médio Completo</option>
                            <option>Ensino Superior Incompleto</option>
                            <option>Ensino Superior Completo</option>
                        </select>
                    </ol>
                </form>
            </div>
        );
    }
}


