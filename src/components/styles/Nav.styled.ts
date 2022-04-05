import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  padding: 2rem 0;
  font-size: 2.4rem;
  background-color: #2c6ebe;
  color: #fcfbfa;

  ul {
    display: flex;
    list-style: none;
  }
  li {
    margin-right: 5.4rem;
  }
  li:last-child {
    margin-right: 0;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;
