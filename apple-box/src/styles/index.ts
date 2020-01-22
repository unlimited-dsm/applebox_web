import {
  createGlobalStyle,
  GlobalStyleComponent,
  DefaultTheme
} from "styled-components";

export const COLOR = {
  gray: "#eceff1" as const,
  hard_gray: "rgb(53, 59, 72)" as const
};

const GlobalStyle: GlobalStyleComponent<{}, DefaultTheme> = createGlobalStyle`
  /* css initialize */
  @import url(http://fonts.googleapis.com/earlyaccess/notosanskr.css);
  html, body {
    width: 100%;
    font-family: 'Noto Sans KR', sans-serif;
  }
  input {
    &[type=password] {
    font-family: sans-serif;
    }
    &:focus {
      outline: none;
    }
  }
  

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
   footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
  }
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  ol, ul {
    list-style: none;
  }
  a {
    color: #000;
    &:link{
      text-decoration: none;
    }
    &:visited{
      text-decoration: none;
    }
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
h1 {
  font-size: 1.17em;
    margin-block-start: 1em;
    margin-block-end: 1em;
}
h3 {
  display: block;
    font-size: 1.17em;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}
`;

export default GlobalStyle;
