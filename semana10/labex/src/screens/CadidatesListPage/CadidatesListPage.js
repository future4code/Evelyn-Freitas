import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function CadidatesListPage() {
    const [trip, setTrip] = useState('')
    const pathParams = useParams();
    const id = pathParams.id

    const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/evelyn-dantas-dumont/trips/:tripId/candidates/:candidateId/decide'

    const getCandidates = () => {
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


    return (
        <div>
            <p>Lista de candidatos</p>
        </div>
    )
}