import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { PostsContext } from '../PostsProvider';

export default function BlogPost() {
  const { posts } = useContext(PostsContext);
  const { postId } = useParams();
  const currentPost = posts.find((post) => post._id === postId);
  console.log(currentPost);
  return (
    <section className="blog-post">
      <h1 className="post-heading">{currentPost?.title}</h1>
      <p className="post-body">{currentPost?.body}</p>
      <p>{currentPost?.author.username}</p>
    </section>
  );
}
