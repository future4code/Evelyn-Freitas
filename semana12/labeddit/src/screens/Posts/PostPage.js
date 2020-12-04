import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useProtectedPage } from '../../hooks/useProtectedPage';
import { useForm } from '../../hooks/useForm'
import { useParams } from 'react-router-dom';
import { baseUrl } from '../../services/user';
import PostCard from '../../components/PostCard/PostCard'

export default function PostPage() {
    useProtectedPage();

    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const { form, onChange } = useForm({ text: '' });
    const pathParams = useParams();
    const id = pathParams.id;

    useEffect(() => {
        postDetails();
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();

    }

    const postDetails = () => {
        axios.get(`${baseUrl}/posts/${id}`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }).then((response) => {
            setPost(response.data.post)
            setComments(response.data.post.comments)
        }).catch((error) => {
            console.log(error.message)
        })
    }

    const createComments = (event) => {

        event.preventDefault()

        const body = {
            text: form.text
        }

        axios.post(`${baseUrl}/posts/${id}/comment`, body, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }).then(() => {
            alert("Comentário enviado!")
            postDetails()
        }).catch((error) => {
            console.log(error.message)
        })
    }



    return (

        <PostCard>
            <p>{post.username}</p>
            <p>{post.title}</p>
            <p>{post.text}</p>
            <p>{post.votesCount}</p>
            <p>{post.commentsCount}</p>
            <div>
                <form onSubmit={createComments}>
                    <textarea
                        name="text"
                        type="text"
                        value={form.text}
                        onChange={handleSubmit}
                    />
                    <button>Comentar</button>
                </form>
            </div>

            <div>
                {comments && (
                    comments.map((item) => {
                        return (
                            <div key={item.id}>
                                <p>{item.text}</p>
                                <p>{item.username}</p>
                            </div>
                        )
                    })
                )}
            </div>


        </PostCard>

    );
}
