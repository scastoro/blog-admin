import React, { SyntheticEvent } from 'react';

interface Props {
  className?: string;
  name?: string;
  handleClick?: (() => void) | ((event: SyntheticEvent<Element, Event>) => Promise<void>);
  children?: React.ReactNode;
}

function Button({ className, name, children, handleClick }: Props) {
  return (
    <button className={className} onClick={handleClick}>
      {name} {children}
    </button>
  );
}

export default Button;
