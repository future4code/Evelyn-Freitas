import React from 'react';
import axios from 'axios'; 
import CreateAndGetPlaylists from './components/CreateAndGetPlaylists';
import LabefyNavbar from './components/LabefyNavbar';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <LabefyNavbar />
        <CreateAndGetPlaylists />
      </div>
    );
  }
}

export default App;
