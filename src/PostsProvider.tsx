import React, { createContext, useState, FC } from 'react';
import { Posts, PostsContextState } from './types/types';

const contextDefaultValues: PostsContextState = {
  posts: [],
  addPost: () => {},
  updatePosts: () => {},
};

export const PostsContext = createContext<PostsContextState>(contextDefaultValues);

const PostsProvider: FC = ({ children }) => {
  const [posts, setPosts] = useState<Posts[]>(contextDefaultValues.posts);

  const addPost = (newPost: Posts) => setPosts((posts) => [...posts, newPost]);

  const updatePosts = (newPosts: Posts[]) => setPosts(newPosts);

  return (
    <PostsContext.Provider
      value={{
        posts,
        addPost,
        updatePosts,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export default PostsProvider;
