import React from 'react';
import './CardPequeno.css';

function CardPequeno(props) {
    return (
        <div className="cardpequeno-container">
            <img scr={ props.imagem } alt="Imagem do card informações" />
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </div>
        
        </div>
    )
}

export default CardPequeno;
