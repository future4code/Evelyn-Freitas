import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  state = {
    pessoas: [
      {
        nomeUsuario: 'Paulinha',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150?random=1'
      },
      {
        nomeUsuario: 'Paulinha',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150?random=2'
      },
      {
        nomeUsuario: 'Paulinha',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150?random=3'
      },
      {
        nomeUsuario: 'Paulinha',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150?random=4'
      },
      {
        nomeUsuario: 'Paulinha',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150?random=5'
      }
    ],

    valorInputNomeUsuario: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: ""

  };

  adicionaPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputNomeUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost
    };

    const inserirNovoPost = [...this.state.pessoas, novoPost];

    this.setState = ({ pessoas: inserirNovoPost });
  };

  onChangeInputNomeUsuario = (event) => {
    this.setState({ valorInputNomeUsuario: event.target.value });
  };

  onChangeInputFotoUsuario = (event) => {
    this.setState({ valorInputFotoUsuario: event.target.value });
  };

  onChangeInputFotoPost = (event) => {
    this.setState({ valorInputFotoPost: event.target.value });
  };
  
  render() {
    
    const formPost = this.state.pessoas.map((pessoa) => {
      return (
        <p>
          {pessoa.nomeUsuario},
          {pessoa.fotoUsuario},
          {pessoa.fotoPost}
        </p>
      );
    });

    return (
      <div className={'app-container'}>
        <input
          nomeUsuario={this.state.valorInputFotoUsuario}
          fotoUsuario={this.state.valorInputFotoUsuario}
          fotoPost={this.state.valorInputFotoPost}
        />
      </div>
    );
  }
}

export default App;
