import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

html, body, #root {
  min-height: 100%;
}

body {
  background: #7959c1;
  -webkit-font-smoothing: antialised !important;
}

body, input, button {
  color: #222;
  font-sie: 14px;
  font-family: Arial, Helvetica, sans-serif;
}

button{
  cursor: pointer;
}
`
