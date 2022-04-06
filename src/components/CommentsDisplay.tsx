import React from 'react';
import { CommentsList, Comments } from '../types/types';

function CommentsDisplay({ commentsList }: CommentsList) {
  const displayComments = commentsList.map((comment: Comments) => {
    return (
      <section key={comment._id} className='comment'>
        <p>{comment.body}</p>
      </section>
    );
  });
  return <section className='comments-container'>{displayComments}</section>;
}

export default CommentsDisplay;
