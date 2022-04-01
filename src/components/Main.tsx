import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PostsContext } from '../PostsProvider';

import BlogPost from './BlogPost';
import PostIndex from './PostIndex';
import Login from './Login';

export default function Main() {
  const { isLoggedIn, posts } = useContext(PostsContext);
  return (
    <Routes>
      <Route path="/" element={isLoggedIn ? <PostIndex items={posts} /> : <Login />} />
      <Route path="/post/:postId" element={<BlogPost />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
