import React, { useContext, useEffect } from 'react';
import Main from './components/Main';
import { PostsContext } from './PostsProvider';
import './App.css';

function App() {
  const { posts, updatePosts } = useContext(PostsContext);

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

      updatePosts(posts);
    })();
  }, []);

  const postsDivs = posts.map((post) => <h3 id={post._id}>{post.title}</h3>);
  return (
    <div className="App">
      {postsDivs}
      <Main />
    </div>
  );
}

export default App;
