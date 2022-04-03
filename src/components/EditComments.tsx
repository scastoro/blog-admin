import React from 'react';
import { CommentsList, Comments } from '../types/types';

function EditComments({ commentsList }: CommentsList) {
  const editComments = commentsList.map((comment: Comments) => {
    return (
      <section className="comment">
        <label htmlFor="comment-body">Edit Comment Body:</label>
        <input type="text" id="comment-body" defaultValue={comment.body} />
      </section>
    );
  });
  return <div>{editComments}</div>;
}

export default EditComments;
