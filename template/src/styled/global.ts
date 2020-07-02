import { css } from '@emotion/core';

const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&display=swap');

  html, body {
    background-color: #fff;
  }

  html, body, #root {
    height: 100%;
    font-size: 16px;
  }

  #root {
    display: flex;
    flex-direction: column;
  }

  footer {
    flex-shrink: 0;
  }
`;

export default globalStyles;
