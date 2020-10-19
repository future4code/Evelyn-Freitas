import React from 'react';

export default class SecondList extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <ol>
                        <li>Qual o curso?</li>
                        <input />
                        <li>Qual a unidade de ensino?</li>
                        <input />
                    </ol>
                </form>
            </div>
        );
    }
}

