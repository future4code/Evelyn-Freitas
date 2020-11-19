import React from 'react'
import { Card, Tittle, Button } from '../../styles/styles'

const TripCard = (props) => {
    return (
        <Card>
            <img src="https://picsum.photos/200/200" alt="imagem" />
            <Tittle>{props.name}</Tittle>
            <p>Planeta: {props.planet}</p>
            <p>Data: {props.date}</p>
            <p>Duração: {props.duration}</p>
            <Button onClick={props.onClick}>Cadidatar-se</Button>
        </Card>
    )
}

export default TripCard