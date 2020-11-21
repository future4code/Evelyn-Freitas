import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/PageTitle/PageTitle'
import TripCard from './TripCard/TripCard'
import CandidateList from './CandidateList/CandidateList'
import { ContentContainer } from '../../styles/styles'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useProtectedPage } from '../../hooks/useProtectedPage'

const TripDetailsPage = () => {
  const [trip, setTrip] = useState()
  const params = useParams()

  useProtectedPage()

  const getTripDetails = () => {
    const baseUrlTripDetails = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/evelyn-dantas-dumont/trip/${params.tripId}`;  
    axios.get(baseUrlTripDetails, {
      headers: {
        auth: window.localStorage.getItem('token')
      }
    }).then((response) => {
      setTrip(response.data.trip)
    })
  }

  useEffect(() => {
    getTripDetails()
  }, [])

  
  const decideCandidate = (approve, candidateId) => {
    const baseUrlDecideCandidate = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/evelyn-dantas-dumont/trips/${params.tripId}/candidates/${candidateId}/decide`;
    
    const body = {
      approve: approve
    }

    axios.put(baseUrlDecideCandidate, body, {
      headers: {
        auth: window.localStorage.getItem('token')
      }
    }).then(() => {
      getTripDetails()
    })
  }

  return <div>
    <PageTitle title={'Detalhes da viagem'}/>
    {trip ? <ContentContainer>
      <TripCard info={trip}/>
      <CandidateList 
        candidates={trip.candidates} 
        decideCandidate={decideCandidate}
      />
    </ContentContainer> : <div>Carregando...</div>}
  </div>
}

export default TripDetailsPage;