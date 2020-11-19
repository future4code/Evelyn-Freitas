import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useProtectedPage } from '../../hooks/useProtectedPage';


export default function ListTripsPage() {
    const[trips, setTrip] = useState([]);
    const history = useHistory();
    useProtectedPage();
    
    useEffect(() => {
        getTrips();
    }, []);

    const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/evelyn-dantas-dumont/trips'

    const getTrips = () => {
        axios
            .get(baseUrl, 
                {
                    headers: {
                        auth: localStorage.getItem('token')
                    }
                })
                .then((response) => {
                    setTrip(response.data.trips)
                })
                .catch((error) => {
                    console.log(error);
                });
    };

    const goToCreateTripPage = () => {
        history.push('/trip/create')
    };

    const goToTripDetailsPage = (id) => {
        console.log(id);
        history.push(`'/trips/${id}'`)
    };

    const goToApplicationFormPage = () => {
        history.push('/form')
    }

    const renderTrips = trips.map((trip) => {
        return (
            <div key={trip.id}>
                <p>Nome: {trip.name}</p>
                <p>Descrição: {trip.description}</p>
                <p>Destino: {trip.planet}</p>
                <p>Duração: {trip.durationInDays} dias</p>
                <p>Data: {trip.date}</p>
                <button onClick={goToTripDetailsPage}>Detalhes da viagem</button>
            </div>
        )
    });

    return (
        <div>
            <div>
                <button onClick={goToCreateTripPage}>Criar viagem</button>
            </div>
            <div>
                {renderTrips}
            </div>
            <div>
                <p>Clique aqui para fazer preencher o formulário de viagem!</p>
                <button onClick={goToApplicationFormPage}>Ir para formulário</button>
            </div>
        </div>
    );
}