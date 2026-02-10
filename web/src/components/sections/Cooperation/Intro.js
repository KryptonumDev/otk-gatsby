import React from "react";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";
import Markdown from "../../../utils/Markdown";
import Heading from "../../atoms/Heading";

const Intro = ({ heading, paragraph }) => {
  return (
    <Wrapper className="max-width">
      <header>
        <Heading type="h2">{heading}</Heading>
        <hr />
      </header>
      <Markdown className="content">{paragraph}</Markdown>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  max-width: 900px;
  header {
    margin-bottom: ${Clamp(24, 32, 42, 'px')};
    h2 {
      color: var(--primary-500);
    }
  }
  .content {
    font-size: ${Clamp(16, 18, 20)};
    line-height: 1.7;
    .unorderedList,
    .orderedList {
      margin: ${Clamp(16, 20, 24, 'px')} 0;
      padding-left: 1.5em;
      li {
        &:not(:last-child) {
          margin-bottom: 8px;
        }
      }
    }
    p:not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

export default Intro;
