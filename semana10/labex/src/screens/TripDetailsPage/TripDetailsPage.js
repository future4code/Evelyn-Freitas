import React, { useEffect, useState, useHistory } from 'react';
import axios from 'axios';
import { useProtectedPage } from '../../hooks/useProtectedPage'

export default function TripDetailsPage() {
    const [trip, setTrip] = useState([]);
    const history = useHistory();
    useProtectedPage();

    useEffect(() => {
        getTripDetail();
    }, []);
    
    const getTripDetail = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/evelyn-dantas-dumont/trip/NoIFVcOiSgTKTIPVZwXS',
            {
                headers: {
                    Authorization: localStorage.getItem('token')
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

    const goToApplicationFormPage = () => {
        history.push('/form')
    }

    return (
        <div>
            <p>Trip Details</p>
            {trip.map((item) => {
                return <p>{item.name}</p>
            })}
            <button onClick={goToApplicationFormPage}></button>
        </div>
    );
}