import styled from '@emotion/styled';

import Page from 'components/Page';

import background from './tree_swing.svg';

export const Container = styled.div`
  height: 100%;
  background-image: url(${background});
  background-position-y: center;
  background-position-x: right;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: #e9d8fd;

  position: relative;

  @media(max-width: 720px) {
    box-sizing: border-box;
    padding: 16px;
    background-size: contain;
  }
`;

export const StyledPage = styled(Page)`
  positoin: relative;
`;

export const PageInfo = styled.div`
  position: absolute;
  top: 50%;
  padding: 16px;
  z-index: 1;
  color: #fff;
  transform: translateY(-50%);

  h1 {
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    font-size: 13rem;
    line-height: 11rem;
    text-align: center;
  }

  h2 {
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    font-size: 3rem;
    line-height: 3rem;
    text-align: center;
  }

  p {
    margin-top: 16px;
  }

  ol {
    margin-left: 16px;
    margin-top: 16px;
  }

  a {
    text-decoration: underline;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #000;
    opacity: 0.5;
    border-radius: 24px;
    z-index: -1;
  }

  @media(max-width:720px) {
    width: 100%;
    max-width: 100%;
    position: relative;
    top: 0;
    left: 0;
    transform: none;

    h1 {
      font-size: 9rem;
      line-height: 7rem;
    }

    h2 {
      font-size: 2rem;
      line-height: 3rem;
    }
  }
`;
