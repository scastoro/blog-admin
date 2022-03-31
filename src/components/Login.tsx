import { useState } from 'react';

interface loginProps {
  formText: string;
}

export default function Login({ formText }: loginProps) {
  const [user, setUser] = useState('userName');

  return (
    <form>
      <h1>test</h1>
      <p>{formText}</p>
    </form>
  );
}
