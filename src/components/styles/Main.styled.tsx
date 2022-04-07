import styled from 'styled-components';

export const Main = styled.main`
  text-align: center;
  width: 80%;
  margin: 0 auto;
  font-size: 1.6rem;
  h1 {
    font-size: 3.6rem;
    margin: 4rem 0;
  }
  .new-post-container {
    width: 40%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    button {
      margin-left: 0;
    }
  }
  .login-container {
    width: 60%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;

    form {
      align-self: center;
    }
    button {
      margin-left: 0;
    }
  }
`;
