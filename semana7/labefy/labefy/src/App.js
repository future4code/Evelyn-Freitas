import React from 'react';
import axios from 'axios';
import CreateAndGetPlaylists from './components/CreateAndGetPlaylists';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <CreateAndGetPlaylists />
      </div>
    );
  }
}

export default App;
