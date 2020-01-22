import styled from "styled-components";

import { COLOR } from "styles/index";

export const CheckWrapper = styled.div`
  width: 900px;
  margin: 0 auto;

  h1 {
    font-size: 24px;
    text-align: center;
    margin: 20px 0;
  }
  h2 {
    font-size: 24px;
    text-align: left;
    margin: 20px 0;
  }
  textarea {
    width: 100%;
    height: 150px;
    border: 1px solid #cfd8dc;
    resize: none;
  }

  > div {
    text-align: right;
    font-size: 14px;
  }

  > div.next {
    text-align: center;

    button {
      all: unset;
      cursor: pointer;
      line-height: 80px;
      text-align: center;
      font-size: 26px;
      background-color: #bbdefb;
      color: #0d47a1;
      margin-bottom: 60px;
      width: 200px;
      height: 80px;
    }
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  section {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(53, 59, 72);
    height: 100%;

    > div {
      border: 1px solid #ddd;
      background-color: #fff;
      padding: 50px 100px 140px 100px;
      width: 450px;
    }
  }
`;

export const StructingDiv = styled.div`
  width: 100%;
  height: 370px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > h1 {
    font-size: 30px;
    margin: 25px 0;
  }

  > label {
    input {
      width: 99%;
      padding: 20px 10px;
      box-sizing: border-box;
      margin-bottom: 20px;

      &::placeholder {
        font-size: 0.9em;
      }
    }
  }

  button {
    all: unset;
    font-size: 16px;
    border: 1px solid #eee;
    background-color: #eee;
    padding: 10px 15px;
    margin-top: 20px;
    cursor: pointer;
  }

  > p {
    .float-left {
      float: left;
    }
    .float-right {
      float: right;
    }

    margin-top: 20px;
  }
`;

export const SignUpStructing = styled(StructingDiv)`
  height: 1370px;
`;
