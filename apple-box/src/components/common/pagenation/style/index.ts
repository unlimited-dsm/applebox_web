import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0 60px 0;
`;

export const PageLink = styled(Link)<{ isactive: "true" | "false" }>`
  text-align: center;
  margin: 0 2px;
  border: 1px solid #e9e9e9;
  width: 32px;
  vertical-align: middle;
  padding: 6px 0 7px 0;
  display: inline-block;
  transition: 0.1s;
  color: ${({ isactive }) => (isactive === "true" ? "#fff" : "#666")};
  background: ${({ isactive }) => (isactive === "true" ? "#222" : "#fff;")};

  &:hover {
    background: #222;
    color: #fff;
  }
`;
