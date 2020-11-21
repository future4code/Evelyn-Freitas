import PageTitle from '../../components/PageTitle/PageTitle'
import { Button, List, ListItem, ListItemText, ListItemLink } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { TripsListPageContainer } from '../../styles/styles'
import { useTripsList } from '../../hooks/useTripsList'
import { useProtectedPage } from '../../hooks/useProtectedPage'

const TripsListPage = () => {
  const trips = useTripsList()
  useProtectedPage()

  return <TripsListPageContainer>
    <PageTitle title={'Lista de Viagens'} />
    <Link to={'/trips/create'}>
      <Button variant={'contained'} color={'primary'}>Criar viagem</Button>
    </Link>

    <List component="nav">
      {trips.map((trip) => {
        return <Link to={`/trips/details/${trip.id}`}>
          <ListItem button>
            <ListItemText primary={trip.name} />
          </ListItem>
        </Link>
      })}
    </List>
  </TripsListPageContainer>
}

export default TripsListPage