import { ItemsList, Posts } from '../types/types';
import React, { useState, useContext, SyntheticEvent } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import Modal from './Modal';
import { PostsContext } from '../PostsProvider';

// When delete button press, show modal and pass correct item id to modal function
// Modal will then make the delete call with the item id if yes btn pressed
// How to pass the modal the correct item id?
// Some kind of function?
// On delete button call, store id in state pass that state to modal as props
// On yes btn click, modal will send delete request with id
export default function PostIndex({ items }: ItemsList) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showPublishModal, setShowPublishModal] = useState(false);
  const [postId, setPostId] = useState('');
  const { toggleResponse } = useContext(PostsContext);

  // TODO: Add error handling based on the status of response
  // TODO: Make error element and display based on error handling logic
  async function deletePost(event: SyntheticEvent): Promise<void> {
    event.preventDefault();
    const response = await fetch(`http://localhost:3000/api/posts/${postId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token') || '',
      },
    });
    const responseData = await response.json();

    console.log(responseData);

    toggleResponse();
  }

  async function publishPost(event: SyntheticEvent): Promise<void> {
    event.preventDefault();
    const response = await fetch(`http://localhost:3000/api/posts/${postId}/publish`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token') || '',
      },
    });
    const responseData = await response.json();

    console.log(responseData);

    toggleResponse();
  }

  function displayDeleteModal(postId: string) {
    toggleShowDeleteModal();
    setPostId(postId);
  }
  function toggleShowDeleteModal() {
    setShowDeleteModal((prevState) => !prevState);
  }
  function displayPublishModal(postId: string) {
    toggleShowPublishModal();
    setPostId(postId);
  }
  function toggleShowPublishModal() {
    setShowPublishModal((prevState) => !prevState);
  }
  const posts = items.map((item: Posts) => {
    return (
      <section className="post">
        <Link to={`/post/${item._id}`}>Edit Post</Link>
        <Button name="Delete Post" handleClick={() => displayDeleteModal(item._id)} />
        <Button
          name={item.published ? 'Unpublish Post' : 'Publish Post'}
          handleClick={() => displayPublishModal(item._id)}
        />
        <h4>{item.title}</h4>
        <p>{item.body}</p>
      </section>
    );
  });
  return (
    <main>
      {posts}{' '}
      {showDeleteModal && (
        <Modal name="Delete" handleAction={deletePost} handleShow={toggleShowDeleteModal} />
      )}
      {showPublishModal && (
        <Modal
          name={items.find((item) => item._id === postId)?.published ? 'Unpublish' : 'Publish'}
          handleAction={publishPost}
          handleShow={toggleShowPublishModal}
        />
      )}
    </main>
  );
}
