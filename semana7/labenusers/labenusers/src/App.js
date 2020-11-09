import React from 'react';
import FormPage from './components/UserPageList';
import UserPageList from './components/UserPageList';

class App extends React.Component {
  state = {
    formPage: true
  }

  changePage = () => {
    this.setState({ formPage: !this.state.formPage });
  }

  render() {
    const currentPage = this.state.formPage ? <FormPage /> : <UserPageList />;

    return (
      <div className="App">
        {currentPage}
        <button onClick={this.changePage}>Mudar de Página</button>       
      </div>
    );
  }
}

export default App;
