import { SyntheticEvent, useContext, useRef } from 'react';
import { PostsContext } from '../PostsProvider';
import { Posts } from '../types/types';
import { StyledForm } from './styles/StyledForm.styled';
import { StyledButton } from './styles/StyledButton.styled';

export default function EditPost({
  blogPost,
  handleShowEdit,
}: {
  blogPost: Posts;
  handleShowEdit: () => void;
}) {
  const { toggleResponse } = useContext(PostsContext);
  const postTitle = useRef<HTMLInputElement>(null);
  const postBody = useRef<HTMLTextAreaElement>(null);
  const postDate = useRef<HTMLInputElement>(null);

  async function handleSubmit(event: SyntheticEvent): Promise<void> {
    event.preventDefault();
    const data = {
      title: postTitle.current?.value,
      body: postBody.current?.value,
      timeStamp: postDate.current?.value,
    };
    console.log(JSON.stringify(data));
    const response = await fetch(`http://localhost:3000/api/posts/${blogPost._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token') || '',
      },
      body: JSON.stringify(data),
    });
    const responseData = await response.json();

    console.log(responseData);
    if (responseData.response) {
      toggleResponse();
      handleShowEdit();
    }
  }
  return (
    <section className='edit-post-container'>
      <StyledForm method='post' submit={handleSubmit}>
        <label htmlFor='title'>Edit Post Title:</label>
        <input
          type='text'
          id='title'
          className='edit-title'
          defaultValue={blogPost.title}
          ref={postTitle}
        />
        <label htmlFor='date'>Edit Post Date</label>
        <input
          type='date'
          name='date'
          id='date'
          defaultValue={blogPost.timeStamp.split('T')[0]}
          ref={postDate}
        />
        <label htmlFor='body'>Edit Post Body:</label>
        <textarea
          id='body'
          className='edit-body'
          defaultValue={blogPost.body}
          ref={postBody}
          cols={40}
          rows={8}
        />
        <StyledButton name='Submit Changes'></StyledButton>
      </StyledForm>
    </section>
  );
}
