import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body, input, button {
  font: 16px 'Lato', sans-serif
}

#root {
  max-width: 960px;
  height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;
  background-color: red
}
`;
