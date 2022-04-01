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
  addPost: (post: Posts) => void;
  updatePosts: (posts: Posts[]) => void;
};
