import React, { useContext } from 'react'

import { ButtonsContainer } from "./styles"

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'

import { useHistory } from 'react-router-dom'
import { goToFeed, goToLogin, goToSignUp } from '../../router/coordinator'
import LoggedContext from '../../context/LoggedContext'

const AppNavBar = () => {
    const history = useHistory()
    const loggedContext = useContext(LoggedContext);

    const handleLoginOrLogoutClick = () => {

        const token = localStorage.getItem("token")

        if (token) {
            localStorage.removeItem("token")
            loggedContext.setLogged(false)
        }

        goToLogin(history)
    }

    return (
        <AppBar className={'appbar'}>
            <Toolbar>
                <ButtonsContainer>
                    <Button color='inherit' onClick={() => goToFeed(history)}>LabEddit</Button>
                    <Button color="inherit" onClick={handleLoginOrLogoutClick}>
                        {loggedContext.logged ? "Logout" : "Login"}
                    </Button>
                    <Button color='inherit' onClick={() => goToSignUp(history)}>Cadastrar</Button>
                </ButtonsContainer>
            </Toolbar>
        </AppBar>
    )
}

export default AppNavBar;
