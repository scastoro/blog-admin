import React from 'react';

function DeleteButton({ handleClick }: { handleClick: () => void }) {
  return <button onClick={handleClick}>Delete Post</button>;
}

export default DeleteButton;
