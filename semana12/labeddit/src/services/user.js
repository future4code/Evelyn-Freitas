import axios from 'axios';
import { goToFeed } from '../router/coordinator';
import { setPost, setComments, id } from '../screens/Posts/PostPage';

const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net';

export const login = (body, history) => {
    axios
        .post(`${baseUrl}/user/login`, body)
        .then(response => {
            localStorage.setItem('token', response.date.token)
            goToFeed(history);
        })
        .catch(error => {
            alert("Email ou senha inválidos!")
            console.log(error.message)
        });
}


export const signup = (body, history) => {

    axios
        .post(`${baseUrl}/user/signup`, body)
        .then(response => {
            localStorage.setItem("token", response.data.token)
            goToFeed(history)
        })
        .catch(error => {
            console.log(error.message)
        });
}
