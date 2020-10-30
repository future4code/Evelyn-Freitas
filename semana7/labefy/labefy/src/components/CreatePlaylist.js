import React from 'react';
import axios from 'axios';
import styled from 'styled-components'; 

const baseCreatePlaylistUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
const axiosConfig = { headers: {
    Authorization: "severo-dumont"
  }
}

class CreatePlaylist extends React.Component {
    state = {
        test: ''
    }

    onChangePlaylistValue = (event) => {
        this.setState({ createPlaylist: event.target.value });
    };

    onClikedButton = () => {
        this.setState({ button: this.state.button })
    };
    
    createPlaylist = () => {
        const body = {
            name: this.state.playlistValue
        };

        axios 
            .post(baseCreatePlaylistUrl, body, axiosConfig)
            .then((response) => {
                this.setState({ playlistValue: '' })
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    render() {
        return (
            <div>
                <input 
                placeholder='Nome da Playlist' 
                value={''} 
                onChange={this.onChangePlaylistValue} 
                />
            </div>
        );
    }
}

export default CreatePlaylist;