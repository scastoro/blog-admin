import { BlogPostItem } from '../types/types';

export default function BlogPost({ blogPost }: BlogPostItem) {
  return (
    <section className="blog-post">
      <h1 className="post-heading">{blogPost.title}</h1>
      <p className="post-body">{blogPost.body}</p>
      <p>{blogPost.author.username}</p>
    </section>
  );
}
