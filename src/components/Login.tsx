import { SyntheticEvent, useRef, useContext, useState } from 'react';
import { PostsContext } from '../PostsProvider';

export default function Login(): JSX.Element {
  const { updateIsLoggedIn, toggleResponse } = useContext(PostsContext);
  const [showErrorMessage, updateShowErrorMessage] = useState(false);

  const userRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(event: SyntheticEvent): Promise<void> {
    event.preventDefault();
    const data = {
      username: userRef.current?.value,
      password: passRef.current?.value,
    };

    const response = await fetch('http://localhost:3000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const responseData = await response.json();

    console.log(responseData);
    if (responseData.token) {
      localStorage.setItem('token', `Bearer ${responseData.token}`);
      updateIsLoggedIn(true);
      updateShowErrorMessage(false);
      toggleResponse();
    } else {
      updateShowErrorMessage(true);
    }
  }
  return (
    <section className='form-container'>
      {showErrorMessage && <h3>Incorrect Username or Password</h3>}
      <form onSubmit={handleSubmit} method='post'>
        <label htmlFor='username'>Username: </label>
        <input type='text' name='username' id='username' className='login-username' ref={userRef} />
        <label htmlFor='password'>Password: </label>
        <input
          type='password'
          name='password'
          id='password'
          className='login-password'
          ref={passRef}
        />
        <button>Sign In</button>
      </form>
    </section>
  );
}
