import React from "react";
import styled from "styled-components";
import Heading from "../../atoms/Heading";
import Button from '../../atoms/Button';
import { Clamp } from "../../../utils/functions";
import Markdown from "../../../utils/Markdown";

const Mission = ({
  data: {
    mission_Heading,
    mission_Subheading,
    mission_Paragraph,
    mission_Cta,
  }
}) => {
  return (
    <Wrapper className="max-width">
      <div className="max-width">
        <Heading type="h2">{mission_Heading}</Heading>
        <hr />
        <Heading type="h3">{mission_Subheading}</Heading>
        <Markdown className="paragraph">{mission_Paragraph}</Markdown>
        <div className="cta-wrapper">
          {mission_Cta.map((cta, i) => (
            <Button theme={cta.theme} to={cta.href} key={i}>{cta.text}</Button>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  > .max-width {
    margin-left: 0;
    max-width: 768px;
    width: 100%;
  }
  h2 {
    color: var(--primary-300);
  }
  .paragraph {
    margin: 24px 0 32px;
    font-size: ${Clamp(16, 18, 20)};
    p:not(:last-child) {
      margin-bottom: 16px;
    }
  }

`

export default Mission;