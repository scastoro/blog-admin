import { SyntheticEvent } from 'react';
export default function Modal({
  name,
  handleAction,
  handleShow,
}: {
  name: string;
  handleAction: (event: SyntheticEvent<Element, Event>) => Promise<void>;
  handleShow: () => void;
}) {
  return (
    <section className="modal">
      <h2>Are you sure you want to {name} this post?</h2>
      <button onClick={handleAction}>Yes</button>
      <button>No</button>
    </section>
  );
}
