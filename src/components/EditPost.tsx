import { SyntheticEvent, useContext, useRef } from 'react';
import { PostsContext } from '../PostsProvider';
import { BlogPostItem } from '../types/types';

export default function EditPost({ blogPost }: BlogPostItem) {
  const { toggleResponse } = useContext(PostsContext);
  const postTitle = useRef<HTMLInputElement>(null);
  const postBody = useRef<HTMLTextAreaElement>(null);

  async function handleSubmit(event: SyntheticEvent): Promise<void> {
    event.preventDefault();
    const data = {
      title: postTitle.current?.value,
      body: postBody.current?.value,
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
    }
  }
  return (
    <section className="edit-post-container">
      <form action="post" onSubmit={handleSubmit}>
        <label htmlFor="title">Edit Post Title:</label>
        <input
          type="text"
          id="title"
          className="edit-title"
          defaultValue={blogPost.title}
          ref={postTitle}
        />
        <label htmlFor="body">Edit Post Body:</label>
        <textarea id="body" className="edit-body" defaultValue={blogPost.body} ref={postBody} />
        <button>Submit Changes</button>
      </form>
    </section>
  );
}
