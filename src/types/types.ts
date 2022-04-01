export interface Comments {
  body: string;
  title: string;
  _id: string;
}
export interface Posts {
  _id: string;
  title: string;
  body: string;
  author: string;
  published: boolean;
  timeStamp: string;
  comments: Array<Comments>;
  __v: number;
}
export type PostsContextState = {
  posts: Posts[];
  isLoggedIn: Boolean;
  response: String;
  updatePosts: (posts: Posts[]) => void;
  updateIsLoggedIn: (loggedIn: Boolean) => void;
  updateResponse: (response: string) => void;
};