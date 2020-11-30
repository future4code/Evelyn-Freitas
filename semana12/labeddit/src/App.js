import React from 'react';
import LoginPage from './screens/Login/LoginPage';
import SingUpPage from './screens/SingUp/SingUpPage';
import FeedPage from './screens/Feed/FeedPage';
import PostPage from './screens/Posts/PostPage';

export default function App() {
  return (
    <div>
      <LoginPage />
      <SingUpPage />
      <FeedPage />
      <PostPage />
    </div>
  );
}
