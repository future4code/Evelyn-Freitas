import React from 'react';
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { useRequestData } from '../../hooks/useRequestData'
import { useHistory } from 'react-router-dom';
import { FeedPageContainer } from './styles'
import PostCard from '../../components/PostCard/PostCard'
import { baseUrl } from '../../services/user';



const FeedPage = () => {
    useProtectedPage()
    const history = useHistory()
    const allPosts = useRequestData(`${baseUrl}/posts`, [])


    return (
        <FeedPageContainer>
            {
                allPosts && allPosts.posts && allPosts.posts.map((post) => {
                    return <PostCard
                        key={post.id}
                        title={post.title}
                        username={post.username}
                        text={post.text}
                        commentsCount={post.commentsCount}
                        votesCount={post.votesCount}
                        direction={post.userVoteDirection}
                    />
                })
            }
        </FeedPageContainer>
    );
}

export default FeedPage;

