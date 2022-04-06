import { ItemsList, Posts } from '../types/types';
import { useState, useContext, SyntheticEvent } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import Modal from './Modal';
import { PostsContext } from '../PostsProvider';
import { Main } from './styles/Main.styled';
import { PostsSection } from './styles/PostsSection.styled';
import { PostCard } from './styles/PostCard.styled';
import { StyledButton } from './styles/StyledButton.styled';

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
      <PostCard className='post'>
        <StyledButton
          name={item.published ? 'Unpublish' : 'Publish'}
          handleClick={() => displayPublishModal(item._id)}
        />
        <h4>{item.title}</h4>
        <p>{item.body}</p>
        <StyledButton>
          <Link to={`/post/${item._id}`}>View</Link>
        </StyledButton>
        <StyledButton name='Delete' handleClick={() => displayDeleteModal(item._id)} />
      </PostCard>
    );
  });
  return (
    <Main>
      <h1>Manage Blog Posts</h1>
      {/* <section className='posts-container'>{posts}</section> */}
      <PostsSection>{posts}</PostsSection>
      {showDeleteModal && (
        <Modal name='Delete' handleAction={deletePost} handleShow={toggleShowDeleteModal} />
      )}
      {showPublishModal && (
        <Modal
          name={items.find((item) => item._id === postId)?.published ? 'Unpublish' : 'Publish'}
          handleAction={publishPost}
          handleShow={toggleShowPublishModal}
        />
      )}
    </Main>
  );
}
