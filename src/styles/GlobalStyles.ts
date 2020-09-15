import { createGlobalStyle  } from 'styled-components'

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: var(--white);
    }
    html, body, #root {
        max-height: 100vh;
        max-width: 100vw;
        width: 100%;
        height: 100%;
        font-size: 16px;
    }
    *, button, input{
        border: 0;
        background: none;
        font-family: 'Mulish', 'Helvetica Neue', sans-serif
    }
    html {
        background: var(--white);
    }
    :root {
        --primary: #252733;
        --secondary: #15647A;
        --third: #C5C7CD;
        --description: #9FA2B4;
        --search: #202327;
        --white: #fff;
        --blueBorder: rgba(0, 145, 255, 0.887547);
        --greenBorder: #29CC97;
        --grayBorder: #DFE0EB;
        --redBorder: #C8372D;
        --blueDescript: #0091FF;
        --yellow: #FEC400;
        --gray: #C4C4C4;
        --menuBorder: #E6E6E6;
        --menuTitle: #2F88A0;
        --bgColor: #F7F8FC;
  }
`