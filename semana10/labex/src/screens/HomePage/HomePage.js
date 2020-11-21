import React from 'react';
import { Button } from '@material-ui/core';
import { ButtonsContainer, Catchphrase } from '../../styles/styles';
import { Link } from 'react-router-dom';
import PageTitle from '../../components/PageTitle/PageTitle';

export default function HomePage() {

    return (
        <div>
            <PageTitle title={'SpaceX Star Trips'}/>
            <Catchphrase>Venha conferir nossas viagens espaciais! É coisa de outro... Planeta! :D</Catchphrase>
            <ButtonsContainer>
                <Link to={'/login'}>
                    <Button variant={'outlined'} color={'secondary'}>Área do administrador</Button>
                </Link>
                <Link to={'/form'}>
                    <Button variant={'contained'} color={'primary'}>Quero me candidatar!</Button>
                </Link>
                <Link to={'/trips/list'}>
                    <Button variant={'contained'} color={'primary'}>Nossas viagens</Button>
                </Link>
            </ButtonsContainer>
        </div>
    );
}