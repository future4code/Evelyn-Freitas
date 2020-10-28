import React from 'react';
import axios from 'axios';

const baseUrl = 
"https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

const axiosConfig = {
    headers: {
        Authorization: 'evelyn-dantas-dumont'
    }
};

class FormPage extends React.Component {
    state = {
        nameValue: '',
        emailValue: ''
    };

    createUser = () => {
        const body = {
            name: this.state.nameValue,
            email: this.state.emailValue
        };
        axios
            .post(baseUrl, axiosConfig)
            .then((response) => {
                alert('Usuário criado com sucesso!');
                this.setState({ nameValue: '', emailValue: ''});
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    onChangeNameValue = (event) => {
        this.setState({ nameValue: event.target.value });
    };
    
    onChangeEmailValue = (event) => {
        this.setState({ emailValue: event.target.value});
    };

    render() {
        return (
            <div>
                <input 
                value={this.state.nameValue} 
                onChange={this.onChangeNameValue}
                />
                <input
                value={this.state.emailValue} 
                onChange={this.onChangeEmailValue}
                />
                <button onClick={this.createUser}>Criar Usuário</button>
            </div>
        );
    }
}

export default FormPage;