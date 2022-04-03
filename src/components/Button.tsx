import React from 'react';

function Button({ name, handleClick }: { name: string; handleClick: () => void }) {
  return (
    <button className={`${name}-btn`} onClick={handleClick}>
      {name}
    </button>
  );
}

export default Button;
