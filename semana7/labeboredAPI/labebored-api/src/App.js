import React from 'react';
import axios from 'axios';
import HomePage from './components/HomePage';
import BoredApi from './components/BoredApi';
import LyricsApi from './components/LyricsApi';

class App extends React.Component {
  render() {
      return (
        <div className="App">
          <HomePage />
        </div>
      );
  }
}

export default App;
