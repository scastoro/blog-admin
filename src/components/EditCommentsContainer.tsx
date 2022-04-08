import { SyntheticEvent, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { PostsContext } from '../PostsProvider';
import { CommentsList, Comments } from '../types/types';
import { StyledButton } from './styles/StyledButton.styled';
import EditComment from './EditComment';
import { StyledComments } from './styles/EditCommentsContainer.styled';
import { StyledModal } from './styles/StyledModal.styled';

function EditCommentsContainer({ commentsList }: CommentsList) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const { toggleResponse } = useContext(PostsContext);
  const [commentId, setCommentId] = useState('');
  const { postId } = useParams();

  async function deleteComment(event: SyntheticEvent): Promise<void> {
    event.preventDefault();
    const response = await fetch(
      `http://localhost:3000/api/posts/${postId}/comments/${commentId}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('token') || '',
        },
      }
    );
    const responseData = await response.json();

    console.log(responseData);

    toggleResponse();
  }

  function displayDeleteModal(postId: string) {
    toggleShowDeleteModal();
    setCommentId(postId);
  }
  function toggleShowDeleteModal() {
    setShowDeleteModal((prevState) => !prevState);
  }
  const editComments = commentsList.map((comment: Comments) => {
    return (
      <StyledComments key={comment._id}>
        <EditComment comment={comment} />
        <StyledButton
          name='Delete Comment'
          className='delete'
          handleClick={() => displayDeleteModal(comment._id)}
        />
      </StyledComments>
    );
  });
  return (
    <section className='edit-comments-container'>
      {editComments}{' '}
      {showDeleteModal && (
        <StyledModal
          name='Delete Comment'
          comment={true}
          handleAction={deleteComment}
          handleShow={toggleShowDeleteModal}
        />
      )}
    </section>
  );
}

export default EditCommentsContainer;
