import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const DeleteButton = styled.button`
background-color: red;
color: white;
margin-left: 10px;
`;

const baseUrl = 
"https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

const axiosConfig = {
    headers: {
        Authorization: 'evelyn-dantas-dumont'
    }
};

class UserPageList extends React.Component {
    state = {
        userList: []
    };

    componentDidMount = () => {
        this.getAllUsers();
    };

    getAllUsers = () => {
        axios 
            .get(baseUrl, axiosConfig)
            .then((response) => {
                this.setState({ userList: response.data });
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    deleteUser = (userId) => {
        axios
            .delete(`${baseUrl}/${userId}`, axiosConfig)
            .then((response) => {
                alert('Usuário deletado com sucesso!');
                this.getAllUsers();
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    render() {
        const renderUserList = this.state.userList.map((user) => {
            return (
                <div>
                    <p key={user.id}>
                        {user.name}
                        <DeleteButton onClick={() => this.deleteUser(user.id)}>
                            Excluir
                        </DeleteButton>
                    </p>
                </div>
            );
        });

        return <div>{renderUserList}</div>
    }    
}

export default UserPageList;