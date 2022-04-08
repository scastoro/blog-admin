import styled from 'styled-components';

export const StyledPostContainer = styled.section`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 50px 320px 50px 250px;
  grid-auto-rows: 50px;
  text-align: left;

  h1.post-heading {
    margin: 0 0 3rem 0;
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
  .post-info {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    font-size: 18px;
  }
  label {
    margin-bottom: 0.3rem;
    font-weight: 600;
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
  .edit-comments-container {
    margin-top: 1rem;
  }
  .comment {
    margin-bottom: 2rem;
  }
`;
