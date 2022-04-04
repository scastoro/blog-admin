import { useContext, useEffect } from 'react';
import { PostsContext } from '../PostsProvider';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const { updateIsLoggedIn } = useContext(PostsContext);
  const navigate = useNavigate();

  useEffect(() => {
    updateIsLoggedIn(false);
    localStorage.removeItem('token');

    setTimeout(() => {
      navigate('/');
    }, 2000);
  }, []);

  return (
    <section className='logout-container'>
      <h2>Logged Out.</h2>
    </section>
  );
}

export default Logout;
