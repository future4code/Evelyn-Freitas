import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import BoredApi from './BoredApi';
import LyricsApi from './LyricsApi';

class HomePage extends React.Component {
    state = {
        homePage: true
    }
            
    onClickChangePage = (event) => {
        this.setState({ homePage: !this.state.homePage });
    }

    render() {
        const currentPage = this.state.homePage ? <BoredApi /> : <LyricsApi />;
        return (
            <div>
                <h1>Meet differents APIs</h1>
                <p>Click on one of the buttons bellow:</p>
                <button onClick={this.onClickChangePage}>Meet Bored API</button>
                <button onClick={this.onClickChangePage}>Meet Lyrics API</button>
            </div>
        );
    }
}

export default HomePage;