import React from "react";
import styled from "styled-components";
import { Clamp } from "../../utils/functions";
import Markdown from "../../utils/Markdown";
import Button from "../atoms/Button";
import Heading from "../atoms/Heading";
import ImageDecorative from "../atoms/ImageDecorative";

const OurStaff = ({
  data: {
    heading,
    subheading,
    cta,
    list,
  }
}) => {
  return (
    <Wrapper className="max-width">
      <Heading type="h2">{heading}</Heading>
      <hr />
      {subheading && (
        <Heading type="h3">{subheading}</Heading>
      )}
      {list && (
        <div className="wrapper">
          {list.map((person, i) => (
            <div className="item" key={i}>
              <ImageDecorative data={person.img} />
              <Heading type="h3">{person.name}</Heading>
              <Markdown className="position">{person.position}</Markdown>
            </div>
          ))}
        </div>
      )}
      {cta && (
        <div className="cta-wrapper">
          <Button theme={cta.theme} to={cta.href}>{cta.text}</Button>
        </div>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  @media (min-width: 599px){
    text-align: center;
  }
  h2 {
    color: var(--primary-500);
  }
  h3 {
    font-weight: 400;
    margin-bottom: ${Clamp(42, 62, 82, 'px')};
  }
  .wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    @media (max-width: 1049px){
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 549px){
      grid-template-columns: 1fr;
    }
    gap: ${Clamp(32, 32, 48, 'px')};
    h3 {
      margin-bottom: 8px;
    }
    .position {
      font-size: ${Clamp(16, 20, 24)};
    }
  }
  .cta-wrapper {
    margin-top: ${Clamp(42, 62, 82, 'px')};
  }
`

export default OurStaff;