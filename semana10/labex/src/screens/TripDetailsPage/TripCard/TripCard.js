import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TripItems from '../TripItems/TripItems';

const TripCard = (props) => {
    const {name, planet, description, date, durationInDays} = props.info
    return <Card>
    <CardContent>
      <Typography variant={'h5'} gutterBottom>
        Informações da viagem
      </Typography>
      <TripItems infoName={'Nome'} info={name}/>
      <TripItems infoName={'Planeta'} info={planet}/>
      <TripItems infoName={'Data'} info={date}/>
      <TripItems infoName={'Descrição'} info={description}/>
      <TripItems infoName={'Duração em dias'} info={durationInDays}/>
    </CardContent>
  </Card>
    
  }

export default TripCard;