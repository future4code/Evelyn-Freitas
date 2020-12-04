import { React, useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { goToFeed } from '../../router/coordinator'

import { PostContainer } from "./styles"
import { baseUrl } from "../../services/user";

function PostDetails() {
    const history = useHistory()
    useProtectedPage()
    const params = useParams()
    const [details, setDetails] = useState([])


    const getPostDetails = () => {
        axios
            .get(`${baseUrl}/posts/${params.id}`, {
                headers: {
                    Authorization: localStorage.getItem("token"),
                },
            })
            .then((res) => {
                setDetails(res.data.post);
            })

            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        getPostDetails();
    }, [details]);


    return (
        <PostContainer>
            <button onClick={() => goToFeed(history)}> Feed </button>
            <div>
                <div>
                    <div>
                        <h3>{details.username}</h3>
                        <h1>{details.title}</h1>
                        <p>{details.text}</p>
                    </div>
            id={details.id}
                </div>
                <div>
                    {details.length === 0 ? (
                        <p>Carregando...</p>
                    ) : (
                            details.comments.map((comment) => {
                                return (
                                    <div
                                        id={comment.id}
                                        text={comment.text}
                                        username={comment.username}
                                        userVoteDirection={comment.userVoteDirection}
                                        votesCount={comment.votesCount}
                                        commentId={comment.id}
                                        postId={params.id}
                                    />
                                );
                            })
                        )}
                </div>
            </div>
        </PostContainer>
    )
}

export default PostDetails