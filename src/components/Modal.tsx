import { StyledButton } from './styles/StyledButton.styled';
import { SyntheticEvent } from 'react';

interface Props {
  className?: string;
  name: string;
  comment?: boolean;
  handleAction: (event: SyntheticEvent<Element, Event>) => Promise<void>;
  handleShow: () => void;
}
export default function Modal({ name, className, comment, handleShow, handleAction }: Props) {
  return (
    <section className={className}>
      <section className='modal-text'>
        {comment ? (
          <h2>Are you sure you want to delete this comment?</h2>
        ) : (
          <h2>Are you sure you want to {name.toLowerCase()} this post?</h2>
        )}
        <StyledButton handleClick={handleAction} name={comment ? 'Delete' : name}></StyledButton>
        <StyledButton handleClick={handleShow}>Cancel</StyledButton>
      </section>
    </section>
  );
}
