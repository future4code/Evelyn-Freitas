import React from 'react';
import axios from 'axios';
import styled from 'styled-components';


class LyricsApi extends React.Component {
    state = {
        lyricsData: null
    }
    
    onChangeClicked = (event) => {
        console.log('Clicked!')
    }
    
    onClickButton = (event) => {
        console.log('It is working :3');
    }

    render() {
        return (
            <div>
                <h1>Discover your lyrics favorite music ^-^</h1>
                <input value={''} onChange={this.onChangeClicked}></input>
                <button onClick={this.onClickButton}></button>
            </div>
        );
    }
}

export default LyricsApi;