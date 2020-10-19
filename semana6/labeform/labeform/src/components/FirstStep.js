import { render } from '@testing-library/react';
import React from 'react';
import FirstList from './FirstList';

export default class FirstStep extends React.Component {
    render() {
        return (
            <div>
                <main>
                    <header>
                        <h2>ETAPA 1 - DADOS GERAIS</h2>
                    </header>
                    <section>
                        <FirstList />
                    </section>
                </main>
            </div>    
        );
    }
}


