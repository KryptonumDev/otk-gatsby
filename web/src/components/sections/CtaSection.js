import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import { Clamp } from "../../utils/functions";
import Markdown from "../../utils/Markdown";
import Button from "../atoms/Button";
import Heading from "../atoms/Heading";

const CtaSection = ({ data, firstIconOnRight=false }) => {
  return (
    <Wrapper className={firstIconOnRight ? 'firstIconOnRight' : ''}>
      <div className="max-width">
        <Heading type="h2" className="heading">{data.heading}</Heading>
        <hr />
        {data.subheading && (
          <Markdown className="subheading">{data.subheading}</Markdown>
        )}
        {data.paragraph && (
          <Markdown className="paragraph">{data.paragraph}</Markdown>
        )}
        {data.claim && (
          <Markdown className="claim">{data.claim}</Markdown>
        )}
        <div className="cta-wrapper">
          {data.cta.map((cta, i) => (
            <Button variant="light" theme={cta.theme} to={cta.href} key={i}>{cta.text}</Button>
          ))}
        </div>
      </div>
      {data.icons && (
        data.icons.map((icon, i) => (
          <GatsbyImage
            image={icon.asset.gatsbyImageData}
            alt={icon.asset.altText || ''}
            objectFit="contain"
            className={`icon icon-${i}`}
            key={i}
          />
        ))
      )}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background-color: var(--primary-500);
  color: var(--neutral-100);
  padding: ${Clamp(48, 48, 82, 'px')} 0;
  position: relative;
  overflow: hidden;
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
  @media (max-width: 699px) {
    .icon-0 {
      display: none;
    }
    &.firstIconOnRight {
      .icon-0 {
        display: block;
      }
      .icon-1 {
        display: none;
      }
    }
  }
  .max-width {
    max-width: 1024px;
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
  }
  .cta-wrapper {
    margin-top: ${Clamp(24, 32, 48, 'px')};
  }
  hr + .cta-wrapper {
    margin-top: 0;
    display: flex;
    justify-content: center;
  }
  @media (min-width: 550px){
    text-align: center;
  }
`

export default CtaSection;