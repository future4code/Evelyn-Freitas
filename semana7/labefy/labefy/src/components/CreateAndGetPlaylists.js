import React from 'react';
import axios from 'axios';
import styled from 'styled-components'; 

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
const axiosConfig = 
    { headers: {
        Authorization: "evelyn-dantas-dumont"
    }};

class CreateAndGetPlaylists extends React.Component {
    state = {
      playlists: [],
      playlistValue: ""
    };
  
    componentDidMount = () => {
      this.getPlaylists();
    };
  
    getPlaylists = () => {
      axios
        .get(baseUrl, axiosConfig)
        .then((response) => {
          this.setState({ playlists: response.data.result.list });
        })
        .catch((error) => {
          console.log(error.message);
        });
    };
  
    createPlaylist = () => {
      const body = {
        name: this.state.playlistValue
      };
  
      axios
        .post(baseUrl, body, axiosConfig)
        .then((response) => {
          this.setState({ playlistValue: "" });
          this.getPlaylists();
        })
        .catch((error) => {
          console.log(error.message);
        });
    };
  
    onChangePlaylistValue = (event) => {
      this.setState({ playlistValue: event.target.value });
    };
  
    render() {
      const renderedPlaylists = this.state.playlists.map((playlist) => {
        return <p key={playlist.id}>{playlist.name}</p>;
      });
  
      return (
        <div className="App">
          <div>
            <input
              placeholder="Playlist Name Here"
              value={this.state.playlistValue}
              onChange={this.onChangePlaylistValue}
            />
            <button onClick={this.createPlaylist}>Create Playlist</button>
          </div>
          {renderedPlaylists}
        </div>
      );
    }
  }
  
  export default CreateAndGetPlaylists;