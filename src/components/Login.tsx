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
    const response = await fetch('http://localhost:3000/auth/login', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username: </label>
      <input type="text" name="username" id="username" className="login-username" ref={userRef} />
      <label htmlFor="password">Password: </label>
      <input type="text" name="password" id="password" className="login-password" ref={passRef} />
      <button>Sign In</button>
    </form>
  );
}
