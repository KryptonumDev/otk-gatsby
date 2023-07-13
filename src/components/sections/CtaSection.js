import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Clamp } from "../../utils/functions";
import Button from "../atoms/Button";
import Heading from "../atoms/Heading";

const CtaSection = ({ data, firstIconOnRight=false }) => {
  return (
    <Wrapper className={firstIconOnRight ? 'firstIconOnRight' : ''}>
      <div className="max-width">
        <Heading type="h2" className="heading">{data.heading}</Heading>
        <hr />
        {data.subheading && (
          <ReactMarkdown className="subheading">{data.subheading}</ReactMarkdown>
        )}
        <ReactMarkdown className="paragraph">{data.paragraph}</ReactMarkdown>
        {data.claim && (
          <ReactMarkdown className="claim">{data.claim}</ReactMarkdown>
        )}
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
          className={`icon icon-${i}`}
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
    max-height: 400px;
    max-width: 400px;
    @media (max-width: 1560px){
      opacity: .1;
    }
    z-index: -1;
    &.icon-0 {
      left: 0;
      bottom: 0;
      img {
        object-position: left;
      }
    }
    &.icon-1 {
      top: 0;
      right: 0;
      img {
        object-position: right;
      }
    }
  }
  &.firstIconOnRight {
    .icon {
      &.icon-0 {
        left: unset;
        bottom: unset;
        top: 0;
        right: 0;
        img {
          object-position: right;
        }
      }
      &.icon-1 {
        top: unset;
        right: unset;
        left: 0;
        bottom: 0;
        img {
          object-position: left;
        }
      }
    }
  }
  .max-width {
    max-width: 1080px;
  }
  .heading {
    h2 {
      font-size: ${Clamp(32, 32, 38)};
    }
  }
  .subheading,
  .claim {
    font-size: ${Clamp(22, 22, 28)};
    font-weight: 600;
    &.subheading {
      margin-bottom: ${Clamp(24, 24, 32, 'px')};
    }
    &.claim {
      margin-top: ${Clamp(24, 24, 32, 'px')};
    }
  }
  .paragraph {
    font-size: ${Clamp(16, 16, 22)};
    p:not(:last-child){
      margin-bottom: 16px;
    }
  }
  .cta-wrapper {
    margin-top: ${Clamp(24, 32, 48, 'px')};
  }
  @media (min-width: 550px){
    text-align: center;
  }
`

export default CtaSection;