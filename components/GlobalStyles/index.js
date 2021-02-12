import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #ff6a00;
    --second: #8B1A1A;
    --letra: #CD950C;
  }
  * {
    font-family: sans-serif;
    color: #333;
    box-sizing: border-box;
  }
  
  html,
  body {
    margin: 0;
    padding: 0;
  }
  body {
    padding-left: 16px;
    padding-right: 16px;
    max-width: 700px;
    margin: auto;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  a {
    color: var(--primary);
  }
  p {
    color: var(--letra);
  }
  button,
  a {
    transition: opacity .3s;
    &:focus,
    &:hover {
      opacity: .5;
    }
  }
  .postsContainer {
  }
  .postsContainer__post {
    a {
      font-weight: bold;
      text-decoration: none;
    }
  }
  .letra {
    color: var(--second);
  }
  .headerContainer {
    display: flex;
    align-items: center;
    padding-top: 16px;
    padding-bottom: 16px;
    margin-bottom: 32px;
    img {
      max-width: 50px;
      border-radius: 100%;
      margin-right: 16px;
    }
    h1 {
      margin: 0;
    }
  }
`;

export default GlobalStyle
