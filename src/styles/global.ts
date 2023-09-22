import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    outline: none;
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased !important
  }
`
