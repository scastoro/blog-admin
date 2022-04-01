import { SyntheticEvent, useRef, useState } from 'react';

interface loginProps {}

export default function Login() {
  const userRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(event: SyntheticEvent): Promise<void> {
    event.preventDefault();
    const data = {
      username: userRef.current?.value,
      password: passRef.current?.value,
    };
    console.log(JSON.stringify(data));
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
    }
  }
  return (
    <form onSubmit={handleSubmit} method="post">
      <label htmlFor="username">Username: </label>
      <input type="text" name="username" id="username" className="login-username" ref={userRef} />
      <label htmlFor="password">Password: </label>
      <input type="text" name="password" id="password" className="login-password" ref={passRef} />
      <button>Sign In</button>
    </form>
  );
}
