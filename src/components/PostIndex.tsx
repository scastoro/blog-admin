import { ItemsList, Posts } from '../types/types';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';
import Modal from './Modal';

// When delete button press, show modal and pass correct item id to modal function
// Modal will then make the delete call with the item id if yes btn pressed
// How to pass the modal the correct item id?
// Some kind of function?
// On delete button call, store id in state pass that state to modal as props
// On yes btn click, modal will send delete request with id
export default function PostIndex({ items }: ItemsList) {
  const [showModal, setShowModal] = useState(false);
  const [postId, setPostId] = useState('');

  function displayModal(postId: string) {
    toggleShowModal();
    setPostId(postId);
  }
  function toggleShowModal() {
    setShowModal((prevState) => !prevState);
  }
  const posts = items.map((item: Posts) => {
    return (
      <section className="post">
        <Link to={`/post/${item._id}`}>Edit Post</Link>
        <DeleteButton handleClick={() => displayModal(item._id)} />
        <h4>{item.title}</h4>
        <p>{item.body}</p>
      </section>
    );
  });
  return (
    <main>
      {posts} {showModal && <Modal postId={postId} handleShow={toggleShowModal} />}
    </main>
  );
}
