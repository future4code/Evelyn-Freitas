import React from 'react';
import axios from 'axios';
import CreatePlaylist from './components/CreatePlaylist';
import GetAllPlaylists from './components/GetAllPlaylists';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <CreatePlaylist />
      </div>
    );
  }
}

export default App;
