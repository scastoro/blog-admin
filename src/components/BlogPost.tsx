import { Posts } from '../types/types';

export default function BlogPost({ currentPost }: { currentPost: Posts }) {
  return (
    <section className="blog-post">
      <h1 className="post-heading">{currentPost?.title}</h1>
      <p className="post-body">{currentPost?.body}</p>
      <p>{currentPost?.author.username}</p>
    </section>
  );
}
