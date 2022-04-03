import { useRef, SyntheticEvent } from 'react';

function NewPost() {
  const postTitle = useRef<HTMLInputElement>(null);
  const postBody = useRef<HTMLTextAreaElement>(null);

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
    }
  }
  return (
    <section className="new-post-container">
      <form action="" method="post" onSubmit={handleSubmit}>
        <label htmlFor="blog-title" className="blog-title-label">
          Enter Title:
        </label>
        <input type="text" id="blog-title" className="blog-title-input" ref={postTitle} />
        <label htmlFor="blog-body" className="blog-body-label">
          Enter Body:
        </label>
        <textarea id="blog-body" cols={30} rows={10} ref={postBody} />
        <button>Submit New Post</button>
      </form>
    </section>
  );
}

export default NewPost;
