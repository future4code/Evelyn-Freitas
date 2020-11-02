import React from 'react';
import axios from 'axios';
import styled from 'styled-components'; 

const InputCreatePlaylist = styled.input`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15em;
    height: 2em;
    margin: 5px;
    border-radius: 10px;
    text-align: center;
`;

const ButtonCreatePlaylist = styled.button`
    width: 10em;
    height: 2em;
    margin-left: 5px;
    color: #ffff;
    background-color: black;
    border-radius: 10em;
`;

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
            <InputCreatePlaylist 
                    placeholder="Playlist Name Here"
                    value={this.state.playlistValue}
                    onChange={this.onChangePlaylistValue}
                    />
            <ButtonCreatePlaylist onClick={this.createPlaylist}>Create Playlist</ButtonCreatePlaylist>
          </div>
          {renderedPlaylists}
        </div>
      );
    }
  }
  
  export default CreateAndGetPlaylists;