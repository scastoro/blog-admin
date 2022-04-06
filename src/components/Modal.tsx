import { SyntheticEvent } from 'react';

interface Props {
  className?: string;
  name: string;
  handleAction: (event: SyntheticEvent<Element, Event>) => Promise<void>;
  handleShow: () => void;
}
export default function Modal({ name, className, handleShow, handleAction }: Props) {
  return (
    <section className='modal'>
      <h2>Are you sure you want to {name} this post?</h2>
      <button onClick={handleAction}>Yes</button>
      <button>No</button>
    </section>
  );
}
