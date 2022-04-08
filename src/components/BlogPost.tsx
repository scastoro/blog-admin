import { BlogPostItem } from '../types/types';

export default function BlogPost({ blogPost }: BlogPostItem) {
  return (
    <section className='blog-post'>
      <h1 className='post-heading'>{blogPost.title}</h1>
      <section className='post-info'>
        <span className='author'>
          <strong>Author:</strong> {blogPost.author.username}
        </span>
        <span className='date'>
          <strong>Date Posted:</strong> {blogPost.timeStamp.split('T')[0]}
        </span>
      </section>
      <p className='post-body'>{blogPost.body}</p>
    </section>
  );
}
