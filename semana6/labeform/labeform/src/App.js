import React from 'react';
import FirstStep from './components/FirstStep';
import SecondStep from './components/SecondStep';
import ThirdStep from './components/ThirdStep';
import FinalStep from './components/FinalStep';

class App extends React.Component {
  state = {
    step: 1,
  }

  stepRender = () => {
    switch (this.state.event) {
      case 1:
        return <FirstStep />;
      case 2: 
        return <SecondStep />;
      case 3:
        return <ThirdStep />;
      case 4:
        return <FinalStep />;
      default:

    }
  }

  // goToNextStep = () => {
  //   this.setState
  // }

  //onClickNextStep 
  
  render() {
    return (
      <div>
        {this.stepRender()}
        <button>Próxima etapa</button>
      </div>
    );
  }
}

export default App;
