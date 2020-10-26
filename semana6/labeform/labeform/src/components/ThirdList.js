import React from 'react';

export default class ThirdList extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <ol>
                        <li>Por que você não terminou um curso de graduação?</li>
                        <input />
                        <li>Você fez algum curso complementar?</li>
                        <select>
                            <option>Curso técnico</option>
                            <option>Curso de inglês</option>
                            <option>Não fiz curso complementar</option>
                        </select>
                    </ol>
                </form>
            </div>
        );
    }
}

