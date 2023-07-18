import React from "react";
import styled from "styled-components";
import { PortableText } from "@portabletext/react";
import { Clamp } from "../../utils/functions";
import { ListBullet } from "../atoms/Icons";

const components = {
  listItem : {
    bullet: ({ children }) => <li><ListBullet /><span>{children}</span></li>,
  },
  marks: {
    link: ({value, children}) => {
      const { href } = value
      return <a href={href} target="_blank" rel="noreferrer">{children}</a>
    }
  }
}

const PortableContent = ({ data }) => {
  return (
    <Wrapper>
      <PortableText
        value={data}
        components={components}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  p + p {
    margin-top: ${Clamp(16, 24, 32, 'px')};
  }
  font-size: ${Clamp(16, 18, 20)};
  p {
    line-height: 150%;
  }
  > h2 {
    &:not(:first-child) {
      margin-top: ${Clamp(48, 72, 96, 'px')};
    }
    margin-bottom: 32px;
  }
  > h3 {
    &:not(:first-child) {
      margin-top: ${Clamp(48, 72, 96, 'px')};
    }
    margin-bottom: 32px;
  }
  a {
    font-weight: 600;
    &:hover {
      text-decoration: underline;
    }
  }
  ul, ol {
    list-style-type: none;
    margin: 24px 0;
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 16px;
  }
  ul {
    li {
      display: grid;
      column-gap: 8px;
      grid-template-columns: 24px 1fr;
      svg {
        margin-top: .1em;
      }
    }
  }
  ol {
    counter-reset: counter;
    li {
      display: grid;
      column-gap: 16px;
      grid-template-columns: 32px 1fr;
      counter-increment: counter;
      &::before {
        content: counter(counter) ".";
        display: inline-block;
      }
      &:nth-child(-n+9)::before {
        content: "0" counter(counter) ".";
      }
    }
  }
`

export default PortableContent;