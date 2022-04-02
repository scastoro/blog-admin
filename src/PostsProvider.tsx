import React, { createContext, useState, FC } from 'react';
import { Posts, PostsContextState } from './types/types';

const contextDefaultValues: PostsContextState = {
  posts: [],
  isLoggedIn: false,
  response: false,
  updatePosts: () => {},
  updateIsLoggedIn: () => {},
  toggleResponse: () => {},
};

export const PostsContext = createContext<PostsContextState>(contextDefaultValues);

const PostsProvider: FC = ({ children }) => {
  const [posts, setPosts] = useState<Posts[]>(contextDefaultValues.posts);
  const [isLoggedIn, setIsLoggedIn] = useState<Boolean>(contextDefaultValues.isLoggedIn);
  const [response, setResponse] = useState<Boolean>(contextDefaultValues.response);

  const updatePosts = (newPosts: Posts[]) => setPosts(newPosts);

  const updateIsLoggedIn = (loggedIn: Boolean) => setIsLoggedIn(loggedIn);

  const toggleResponse = () => setResponse(!response);

  return (
    <PostsContext.Provider
      value={{
        posts,
        isLoggedIn,
        response,
        updatePosts,
        updateIsLoggedIn,
        toggleResponse,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export default PostsProvider;
