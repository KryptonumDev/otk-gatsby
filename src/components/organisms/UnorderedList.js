import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Clamp } from "../../utils/functions";
import { ListBullet } from "../atoms/Icons";

const UnorderedList = ({ data }) => {
  return (
    <Wrapper>
      {data.map((item, i) => (
        <li key={i}>
          <ListBullet />
          <ReactMarkdown>{item}</ReactMarkdown>
        </li>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.ul`
  li {
    display: grid;
    grid-template-columns: 24px 1fr;
    font-size: ${Clamp(16, 22, 22)};
    gap: 12px;
    &:not(:last-child){
      margin-bottom: 16px;
    }
    a {
      font-weight: 600;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`

export default UnorderedList;