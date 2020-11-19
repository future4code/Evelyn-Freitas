import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import { useProtectedPage } from '../../hooks/useProtectedPage'

export default function TripDetailsPage() {
    const [trips, setTrip] = useState({});
    const history = useHistory();
    const pathParams = useParams();
    const id = pathParams.id
    useProtectedPage();

    useEffect(() => {
        getTripDetail();
    }, []);

    const baseUrl = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/evelyn-dantas-dumont/trip/${id}`
    
    const getTripDetail = () => {
        axios.get(baseUrl,
            {
                headers: {
                    auth: localStorage.getItem('token')
                }
            }
        )
        .then((response) => {
            setTrip(response.data.trip);
        })
        .catch((error) => {
            console.log(error);
        });
    };

    const goBack = () => {
        history.goBack();
    }

    return (
        <div>
            <div>
                <p>Id: {trips.id}</p>
                <p>Destino: {trips.planet}</p>
                <p>Duração: {trips.durationInDays} dias</p>
                <p>Data: {trips.date}</p>
                <p>Nome: {trips.name}</p>
                <p>Descrição: {trips.description}</p>
                <button onClick={goBack}>Voltar</button>
            </div>
        </div>
    );
}