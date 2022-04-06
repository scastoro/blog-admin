import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;400;600;700;900&display=swap');
  *{
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 10px;
    font-family: 'Inter', sans-serif;
  }
  a{
    color: inherit;
    text-decoration: none;
  }
  #root{
    position: relative;
    height: 100vh;
  }
`;
