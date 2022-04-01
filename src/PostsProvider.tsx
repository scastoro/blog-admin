import React, { createContext, useState, FC } from 'react';
import { Posts, PostsContextState } from './types/types';

const contextDefaultValues: PostsContextState = {
  posts: [],
  isLoggedIn: false,
  response: '',
  updatePosts: () => {},
  updateIsLoggedIn: () => {},
  updateResponse: () => {},
};

export const PostsContext = createContext<PostsContextState>(contextDefaultValues);

const PostsProvider: FC = ({ children }) => {
  const [posts, setPosts] = useState<Posts[]>(contextDefaultValues.posts);
  const [isLoggedIn, setIsLoggedIn] = useState<Boolean>(contextDefaultValues.isLoggedIn);
  const [response, setResponse] = useState<String>(contextDefaultValues.response);

  const updatePosts = (newPosts: Posts[]) => setPosts(newPosts);

  const updateIsLoggedIn = (loggedIn: Boolean) => setIsLoggedIn(loggedIn);

  const updateResponse = (response: String) => setResponse(response);

  return (
    <PostsContext.Provider
      value={{
        posts,
        isLoggedIn,
        response,
        updatePosts,
        updateIsLoggedIn,
        updateResponse,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export default PostsProvider;
