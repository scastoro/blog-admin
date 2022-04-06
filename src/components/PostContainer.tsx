import { useContext, useState } from 'react';
import BlogPost from './BlogPost';
import EditPost from './EditPost';
import CommentsDisplay from './CommentsDisplay';
import EditComments from './EditCommentsContainer';
import { useParams } from 'react-router-dom';
import { PostsContext } from '../PostsProvider';
import { StyledButton } from './styles/StyledButton.styled';

export default function PostContainer() {
  const [showEdit, setShowEdit] = useState(false);
  const [showEditComments, setShowEditComments] = useState(false);
  function toggleShowEdit() {
    setShowEdit((prevEdit) => !prevEdit);
  }
  function toggleShowEditComments() {
    setShowEditComments((prevEdit) => !prevEdit);
  }
  const { posts } = useContext(PostsContext);
  const { postId } = useParams();
  const currentPost = posts.find((post) => post._id === postId);
  if (currentPost === undefined) {
    throw new TypeError('Could not find post, check state');
  }
  console.log(currentPost);

  return (
    <section className='blog-post-container'>
      <StyledButton
        name={!showEdit ? 'Edit Post' : 'Show Post'}
        handleClick={toggleShowEdit}
      ></StyledButton>
      {showEdit ? (
        <EditPost blogPost={currentPost} handleShowEdit={toggleShowEdit} />
      ) : (
        <BlogPost blogPost={currentPost} />
      )}
      <StyledButton
        name={!showEditComments ? 'Edit Comments' : 'Show Comments'}
        handleClick={toggleShowEditComments}
      ></StyledButton>
      {showEditComments ? (
        <EditComments commentsList={currentPost.comments} />
      ) : (
        <CommentsDisplay commentsList={currentPost.comments} />
      )}
    </section>
  );
}
