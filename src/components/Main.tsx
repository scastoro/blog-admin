import { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { PostsContext } from '../PostsProvider';

import PostIndex from './PostIndex';
import Login from './Login';
import PostContainer from './PostContainer';

export default function Main() {
  const { isLoggedIn, posts } = useContext(PostsContext);
  return (
    <Routes>
      <Route path="/" element={isLoggedIn ? <PostIndex items={posts} /> : <Login />} />
      <Route path="/post/:postId" element={<PostContainer />} />
      <Route path="/login" element={isLoggedIn ? <Navigate replace to="/" /> : <Login />} />
    </Routes>
  );
}
