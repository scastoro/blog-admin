import { useRef, SyntheticEvent, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PostsContext } from '../PostsProvider';
import { StyledButton } from './styles/StyledButton.styled';
import { StyledForm } from './styles/StyledForm.styled';

function NewPost() {
  const postTitle = useRef<HTMLInputElement>(null);
  const postBody = useRef<HTMLTextAreaElement>(null);
  const navigate = useNavigate();
  const { toggleResponse } = useContext(PostsContext);

  async function handleSubmit(event: SyntheticEvent): Promise<void> {
    event.preventDefault();
    const data = {
      title: postTitle.current?.value,
      body: postBody.current?.value,
    };
    console.log(JSON.stringify(data));
    const response = await fetch(`http://localhost:3000/api/posts/`, {
      method: 'POST',
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
      navigate('/', { replace: true });
    }
  }
  return (
    <section className='new-post-container'>
      <h1>Add New Post</h1>
      <StyledForm method='post' submit={handleSubmit}>
        <label htmlFor='blog-title' className='blog-title-label'>
          Enter Title:
        </label>
        <input type='text' id='blog-title' className='blog-title-input' ref={postTitle} />
        <label htmlFor='blog-body' className='blog-body-label'>
          Enter Body:
        </label>
        <textarea id='blog-body' cols={30} rows={10} ref={postBody} />
        <StyledButton name='Submit Post' />
      </StyledForm>
    </section>
  );
}

export default NewPost;
