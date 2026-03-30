import React from "react";
import styled from "styled-components";
import { PortableText } from "@portabletext/react";
import { ListBullet } from "../atoms/Icons";

const components = {
  listItem: {
    bullet: ({ children }) => <li><ListBullet /><span>{children}</span></li>,
    number: ({ children }) => <li><span>{children}</span></li>,
  },
  marks: {
    link: ({ value, children }) => {
      const { href } = value
      return <a href={href} target="_blank" rel="noreferrer" className="link">{children}<span className="sr-only">(otwiera się w nowej karcie)</span></a>
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
  font-size: clamp(1rem, calc(1.125vw / 0.48), 1.25rem);
  a {
    word-break: break-all;
  }
  p + p {
    margin-top: clamp(1rem, calc(1.5vw / 0.48), 2rem);
  }
  p {
    line-height: 1.5;
  }
  > h2 {
    &:not(:first-child) {
      margin-top: clamp(3rem, calc(4.5vw / 0.48), 6rem);
    }
    margin-bottom: 2rem;
  }
  > h3 {
    &:not(:first-child) {
      margin-top: clamp(2rem, calc(2.5vw / 0.48), 3rem);
    }
    margin-bottom: 1rem;
  }
  ul, ol {
    list-style-type: none;
    margin: 1.5rem 0;
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.75rem;
  }
  ul {
    li {
      display: grid;
      column-gap: 0.5rem;
      grid-template-columns: 1.5rem 1fr;
      svg {
        margin-top: .1em;
      }
    }
  }
  ol {
    counter-reset: counter;
    > li {
      display: grid;
      column-gap: 0.5rem;
      grid-template-columns: 2rem 1fr;
      counter-increment: counter;
      &::before {
        content: counter(counter) ".";
        display: inline-block;
      }
      &:nth-child(-n+9)::before {
        content: "0" counter(counter) ".";
      }
      ol {
        margin: 1rem 0;
      }
    }
  }
`

export default PortableContent;
