import styled from 'styled-components';

export const StyledPostContainer = styled.section`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 50px 300px 50px 250px;
  grid-auto-rows: 50px;
  text-align: left;

  h1 {
    margin-top: 0;
  }
  .blog-post,
  .edit-post-container {
    grid-column: 2/6;
    grid-row: 2 / 3;
  }
  .edit {
    grid-column: 6/7;
    height: 85%;
    width: 80%;
  }
  button:nth-of-type(2) {
    grid-row: 3/ 4;
    grid-column: -1 / -2;
    height: 85%;
    width: 80%;
    margin: 0;
  }
  h2 {
    grid-row: 3/ 4;
    grid-column: 2/6;
  }
  .comments-container,
  .edit-comments-container {
    grid-row: 4 /5;
    grid-column: 2/7;
  }
  .comment {
    margin-bottom: 2rem;
  }
`;
