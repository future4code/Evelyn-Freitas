import React, { useEffect, useState, useHistory } from 'react';
import axios from 'axios';
import { useProtectedPage } from '../../hooks/useProtectedPage'

export default function TripDetailsPage() {
    const [trip, setTrip] = useState({});
    useProtectedPage();

    useEffect(() => {
        getTripDetail();
    }, []);
    
    const getTripDetail = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/evelyn-dantas-dumont/trip/NoIFVcOiSgTKTIPVZwXS',
            {
                header: {
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

    return (
        <div>
            <p>Trip Details</p>
            <p>{trip.name}</p>
            <p>{trip.description}</p>
            <p>{trip.durationInDays}</p>
            <p>{trip.planet}</p>
            <p>{trip.date}</p>
        </div>
    );
}