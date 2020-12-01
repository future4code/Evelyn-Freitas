import React from 'react'
import Router from './router/Router';
import { BrowserRouter } from 'react-router-dom'
import styled from 'styled-components'

import { ThemeProvider } from '@material-ui/core/styles'

import theme from './constants/theme';
import AppNavBar from './components/AppNavBar/AppNavBar';

const Container = styled.div`
  padding-top: 64px;
`
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AppNavBar />
        <Container>
          <Router />
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
