import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Clamp } from "../../utils/functions";
import Button from "../atoms/Button";
import Heading from "../atoms/Heading";

const CtaSection = ({ data }) => {
  console.log(data);
  return (
    <Wrapper>
      <div className="max-width">
        <Heading type="h2" className="heading">{data.heading}</Heading>
        <hr />
        <ReactMarkdown className="subheading">{data.subheading}</ReactMarkdown>
        <ReactMarkdown className="paragraph">{data.paragraph}</ReactMarkdown>
        <div className="cta-wrapper">
          {data.cta.map((cta, i) => (
            <Button variant="light" theme={cta.theme} to={cta.href} key={i}>{cta.text}</Button>
          ))}
        </div>
      </div>
      {data.icons.map((icon, i) => (
        <GatsbyImage
          image={icon.asset.gatsbyImageData}
          alt={icon.asset.altText || ''}
          objectFit="contain"
          objectPosition="left"
          className={`icon icon-${i+1}`}
          key={i}
        />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background-color: var(--primary-500);
  color: var(--neutral-100);
  padding: ${Clamp(48, 48, 82, 'px')} 0;
  position: relative;
  z-index: 1;
  .icon {
    position: absolute;
    height: 100%;
    max-height: 400px;
    max-width: 400px;
    @media (max-width: 1560px){
      opacity: .1;
    }
    z-index: -1;
    &.icon-1 {
      left: 0;
      bottom: 0;
    }
  }
  .max-width {
    max-width: 1080px;
  }
  .heading {
    font-size: ${Clamp(32, 32, 38)};
  }
  .paragraph {
    font-size: ${Clamp(16, 16, 24)};
  }
  .cta-wrapper {
    margin-top: ${Clamp(24, 32, 48, 'px')};
  }
  text-align: center;
`

export default CtaSection;