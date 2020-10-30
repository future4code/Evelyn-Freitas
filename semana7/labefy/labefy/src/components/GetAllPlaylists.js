import React from 'react';
import axios from 'axios';

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
const axiosConfig =  { headers: {
    Authorization: "evelyn-dantas-dumont"
  }
}

class GetAllPlaylists extends React.Component {
    state = {
        playlist: [],
        playlistValue: ''
    };

    componentDidMount = () => {
        this.getPlaylists();
      };

    render() {
    getPlaylists = () => {
            axios 
                .get(baseUrl, axiosConfig)
                .then((response) => {
                    this.setState({ playlist: response.data.result.list })
                })
                .catch((error) => {
                    console.log(error.message);
                });    
        }

        const renderedPlaylists = this.state.playlist.map(() => {
        return <p key={playlist.id}>{playlist.name}</p>;
        })
        
        return (
            <div>
                {renderedPlaylists}
            </div>
        );
    }
}

export default GetAllPlaylists;