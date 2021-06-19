import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,
  ::after,
  ::before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    box-sizing: border-box;
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    text-size-adjust: 100%;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;

    &::-webkit-scrollbar{
        width: 0.5rem;
    }

    &::-webkit-scrollbar-thumb{
        background-color: darkgrey;
        border-radius: 4px;
    }

    --body-font-family: 'Poppins',  sans-serif;
    --secondary-font: 'Poppins', sans-serif;
    --title-font: 'Archivo', sans-serif;
    --bg-primary: "#FFFFFF";
    --bg-hover: "#373737";
    --container-width: 1200px;
    --text-primary: ${(props) => props.theme.colors.textColor};
    --text-secondary: ${(props) => props.theme.colors.whiteColor};
    --text-third: ${(props) => props.theme.colors.textThirdColor};
    --text-link: ${(props) => props.theme.colors.linkColor};
    --text-hover: ${(props) => props.theme.colors.textHover};
    --shadow: ${(props) => props.theme.colors.shadowColor} 0px 2px 8px 0px;


    @media ${(props) => props.theme.mediaQueries.small} {
      font-size: 60%;
    }

    @media ${(props) => props.theme.mediaQueries.smallest} {
      font-size: 55%;
    }
  }

  body {
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.5;
    color: var(--text-primary);
    font-family: var(--body-font-family);
    overflow-y: ${({ menuOpen }) => menuOpen && 'hidden'};
  }

  input,
  button,
  select,
  textarea,a {
    font-family: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
    vertical-align: middle;
  }

  img, svg {
    vertical-align: middle;
  }

  svg {
    overflow: hidden;
  }

  ul, li {
    list-style-type: none;
  }

  .noscroll {
    overflow: hidden;
  }
`;
