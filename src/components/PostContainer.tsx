import { useContext, useState } from 'react';
import BlogPost from './BlogPost';
import EditPost from './EditPost';
import { useParams } from 'react-router-dom';
import { PostsContext } from '../PostsProvider';

export default function PostContainer() {
  const [showEdit, setShowEdit] = useState(false);
  function toggleShowEdit() {
    setShowEdit((prevEdit) => !prevEdit);
  }
  const { posts } = useContext(PostsContext);
  const { postId } = useParams();
  const currentPost = posts.find((post) => post._id === postId);
  if (currentPost === undefined) {
    throw new TypeError('Could not find post, check state');
  }
  console.log(currentPost);

  return (
    <section className="blog-post-container">
      <button onClick={toggleShowEdit}>{!showEdit ? 'Edit Post' : 'Show Post'}</button>
      {showEdit ? <EditPost /> : <BlogPost currentPost={currentPost} />}
    </section>
  );
}
