import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import { useProtectedPage } from '../../hooks/useProtectedPage'

export default function TripDetailsPage() {
    const [trips, setTrip] = useState([]);
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
            setTrip(response.data.trips);
        })
        .catch((error) => {
            console.log(error);
        });
    };

    const goBack = () => {
        history.goBack();
    }

    const renderTripDetails = trips.map((trip) => {
        return (
            <div key={trip.id}>
                <p>Id: {trip.id}</p>
                <p>Destino: {trip.planet}</p>
                <p>Duração: {trip.durationInDays} dias</p>
                <p>Data: {trip.date}</p>
                <p>Nome: {trip.name}</p>
                <p>Descrição: {trip.description}</p>
                <button onClick={goBack}>Voltar</button>
            </div>
        )
    });

    return (
        <div>
            {renderTripDetails}
        </div>
    );
}