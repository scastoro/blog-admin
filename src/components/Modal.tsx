import { SyntheticEvent, useContext } from 'react';
import PostsProvider, { PostsContext } from '../PostsProvider';

export default function Modal({ postId, handleShow }: { postId: string; handleShow: () => void }) {
  const { toggleResponse } = useContext(PostsContext);

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

    handleShow();
    toggleResponse();
  }
  return (
    <section className="modal">
      <h2>Are you sure you want to delete this post?</h2>
      <button onClick={deletePost}>Yes</button>
      <button>No</button>
    </section>
  );
}
