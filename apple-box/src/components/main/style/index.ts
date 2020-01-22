import styled from "styled-components";

import { COLOR } from "styles/index";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

export const ImageSlider = styled.div<{ translateValue: number }>`
  width: 100%;
  height: 700px;
  position: relative;
  margin: 0 auto;
  overflow: hidden;

  ul {
    display: flex;
    height: 100%;
    font-size: 0;
    transform: ${props => `translateX(${props.translateValue}px)`};
    transition: transform ease-out 0.45s;

    li {
      display: inline-block;
    }

    li > img {
      width: 2000px;
      margin: 0;
      padding: 0;
    }
  }
`;

export const QuickMenu = styled.div`
  position: fixed;
  width: 160px;
  z-index: 10;
  background-color: white;
  border-radius: 10px;
  top: 300px;
  right: 20px;
  text-align: center;

  ul {
    padding: 0;
    margin: 16px 0;

    li: {
      list-style: none;
    }
  }
`;

export const ContentWrap = styled.div`
  height: 400px;
  display: flex;
  justify-content: center;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 200px;
    border: 1px solid #a4b0be;
    border-radius: 10px;
    margin: 50px 2px;
    padding: 15px;
  }

  > div.loginWrap {
    font-size: 14px;
    justify-content: flex-start;

    > div.actives {
      width: 260px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      input {
        width: 120px;
        padding: 10px;
      }

      button {
        all: unset;
        cursor: pointer;
        width: 124px;
        text-align: center;
        height: 85px;
        background-color: #64b5f6;
        color: white;
      }
    }
  }
`;

export const MyContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  text-align: center;

  h3 {
    font-size: 20px;
    margin-bottom: 15px;
  }

  p {
    font-size: 15px;
  }

  a {
    text-decoration: underline;
  }

  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

    > button {
      all: unset;
      cursor: pointer;
      border-radius: 7px;
      width: 98px;
      height: 50px;
      text-align: center;
      line-height: 50px;
      color: #000;
      background: #eceff1;
    }
    > button.blue {
      all: unset;
      cursor: pointer;
      border-radius: 7px;
      width: 98px;
      height: 50px;
      text-align: center;
      line-height: 50px;
      color: #fff;
      background: #64b5f6;
    }
  }
`;

export const VideoWrap = styled.div`
  height: 600px;
  background-color: #eceff1;
  display: flex;
  flex-direction: column;
  align-items: center;

  video {
    width: 854px;
    height: 480px;
  }
`;
