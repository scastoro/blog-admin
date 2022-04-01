import { ItemsList, Posts } from '../types/types';
import React from 'react';
import { Link } from 'react-router-dom';

export default function PostIndex({ items }: ItemsList) {
  const posts = items.map((item: Posts) => {
    return (
      <section className="post">
        <Link to={`/post/${item._id}`}>Edit Post</Link>
        <h4>{item.title}</h4>
        <p>{item.body}</p>
      </section>
    );
  });
  return <main>{posts}</main>;
}
