import React from 'react'

import { ButtonsContainer } from "./styles"

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'

import { useHistory } from 'react-router-dom'
import { goToFeed, goToLogin, goToSignUp } from '../../router/coordinator'

const AppNavBar = () => {
    const history = useHistory()
    return (
        <AppBar className={'appbar'}>
            <Toolbar>
                <ButtonsContainer>
                    <Button color='inherit' onClick={() => goToFeed(history)}>LabEddit</Button>
                    <Button color='inherit' onClick={() => goToLogin(history)}>Logout</Button>
                    <Button color='inherit' onClick={() => goToSignUp(history)}>Cadastrar</Button>
                </ButtonsContainer>
            </Toolbar>
        </AppBar>
    )
}

export default AppNavBar;
