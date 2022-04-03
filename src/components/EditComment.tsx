import { useRef, SyntheticEvent, useContext } from 'react';
import { Comments } from '../types/types';
import { useParams } from 'react-router-dom';
import { PostsContext } from '../PostsProvider';

function EditComment({ comment }: { comment: Comments }) {
  const { toggleResponse } = useContext(PostsContext);
  const commentBody = useRef<HTMLTextAreaElement>(null);
  const { postId } = useParams();

  async function editComment(event: SyntheticEvent): Promise<void> {
    event.preventDefault();
    const data = {
      body: commentBody.current?.value,
    };
    const response = await fetch(
      `http://localhost:3000/api/posts/${postId}/comments/${comment._id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('token') || '',
        },
        body: JSON.stringify(data),
      }
    );
    const responseData = await response.json();

    console.log(responseData);

    toggleResponse();
  }
  return (
    <form className="edit-comment-form" method="POST" onSubmit={editComment}>
      <label htmlFor="comment-body">Edit Comment Body:</label>
      <textarea
        name="comment-body"
        id="body"
        cols={30}
        rows={10}
        defaultValue={comment.body}
        ref={commentBody}
      />
      <button>Edit Comment</button>
    </form>
  );
}

export default EditComment;
