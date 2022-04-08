import React, { useContext, useEffect, useState } from 'react';
import Main from './components/Main';
import { PostsContext } from './PostsProvider';
import { StyledLoading } from './components/Loading';
import { Link } from 'react-router-dom';
import { Nav } from './components/styles/Nav.styled';

function App() {
  const { response, isLoggedIn, updateIsLoggedIn, updatePosts } = useContext(PostsContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      const response = await fetch('http://localhost:3000/api/posts', {
        mode: 'cors',
        headers: {
          Authorization: localStorage.getItem('token') || '',
        },
      });

      const posts = await response.json();
      console.log(posts);

      if (posts.length > 0) {
        updatePosts(posts);
        updateIsLoggedIn(true);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    })();
  }, [response]);

  return (
    <div className='App'>
      <Nav>
        <ul>
          <li>{isLoggedIn && <Link to='/'>See Posts</Link>}</li>
          <li>
            {isLoggedIn ? <Link to='/logout'>Log Out</Link> : <Link to='/login'>Log In</Link>}
          </li>
          {!isLoggedIn && (
            <li>
              <Link to='/signup'>Sign Up</Link>
            </li>
          )}
          <li>{isLoggedIn && <Link to='/newpost'>New Post</Link>}</li>
        </ul>
      </Nav>
      {isLoading ? <StyledLoading /> : <Main />}
    </div>
  );
}

export default App;
