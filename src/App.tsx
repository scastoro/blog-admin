import React, { useContext, useEffect, useState } from 'react';
import Main from './components/Main';
import { PostsContext } from './PostsProvider';
import './App.css';
import Loading from './components/Loading';
import { Link } from 'react-router-dom';

function App() {
  const { posts, updateIsLoggedIn, updatePosts } = useContext(PostsContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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
  }, []);

  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">See Posts</Link>
          </li>
          <li>
            <Link to="/login">Log In</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>
      </nav>
      {isLoading ? <Loading /> : <Main />}
    </div>
  );
}

export default App;
