import axios from "axios";
import { goToFeed } from "../Router/Coordinator";
import { baseUrl } from "./user";

export const createPosts = (body, history) => {
    const token = localStorage.getItem("token");

    axios
        .post(`${baseUrl}/posts`, body, {
            headers: {
                Authorization: token,
            },
        })
        .then((response) => {
            console.log(response);
            goToFeed(history);
        })
        .catch((error) => {
            console.log(error.message);
        });
};

export const createComments = (body, postId) => {
    const token = localStorage.getItem("token");

    axios
        .post(`${baseUrl}/posts/${postId}/comment`, body, {
            headers: {
                Authorization: token,
            },
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error.message);
        });
};

export const votePost = (body, postId) => {
    const token = localStorage.getItem("token");
    axios
        .put(`${baseUrl}/posts/${postId}/vote`, body, {
            headers: {
                Authorization: token,
            },
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error.message);
        });
};