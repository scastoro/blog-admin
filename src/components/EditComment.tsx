import { useRef, SyntheticEvent, useContext } from 'react';
import { Comments } from '../types/types';
import { useParams } from 'react-router-dom';
import { PostsContext } from '../PostsProvider';
import { StyledForm } from './styles/StyledForm.styled';
import { StyledButton } from './styles/StyledButton.styled';

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
    <StyledForm className='edit-comment-form' method='POST' submit={editComment}>
      <label htmlFor='comment-body'>Edit Comment Body:</label>
      <textarea
        name='comment-body'
        id='body'
        cols={40}
        rows={6}
        defaultValue={comment.body}
        ref={commentBody}
      />
      <StyledButton name='Submit' />
    </StyledForm>
  );
}

export default EditComment;
