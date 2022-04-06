import { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { PostsContext } from '../PostsProvider';

import PostIndex from './PostIndex';
import Login from './Login';
import PostContainer from './PostContainer';
import NewPost from './NewPost';
import Logout from './Logout';
import { Main as StyledMain } from './styles/Main.styled';

export default function Main() {
  const { isLoggedIn, posts } = useContext(PostsContext);
  return (
    <StyledMain>
      <Routes>
        <Route path='/' element={isLoggedIn ? <PostIndex items={posts} /> : <Login />} />
        <Route path='/post/:postId' element={<PostContainer />} />
        <Route path='/login' element={isLoggedIn ? <Navigate replace to='/' /> : <Login />} />
        <Route path='/newpost' element={<NewPost />} />
        <Route path='/logout' element={<Logout />} />
      </Routes>
    </StyledMain>
  );
}
