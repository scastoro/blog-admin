import styled from 'styled-components';

export const PostCard = styled.section`
  text-align: left;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 2rem;
  padding: 2.5rem;
  border: solid 1px #c4c4c4;
  border-radius: 10px;

  h2 {
    grid-column: 1/4;
  }
  p {
    grid-column: 1 / -1;
  }
  button:last-child {
    grid-column: 4 / 5;
  }
`;
