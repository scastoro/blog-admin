import { useState } from 'react';

interface loginProps {
  formText: string;
}

export default function Login({ formText }: loginProps) {
  return (
    <form>
      <h1>Log in</h1>
      <p>{formText}</p>
    </form>
  );
}
