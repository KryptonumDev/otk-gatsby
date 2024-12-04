import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import { Clamp } from '../../utils/functions';
import Markdown from "../../utils/Markdown";
import Button from "../atoms/Button";
import Heading from '../atoms/Heading';

const BenefitsSection = ({
  ctaOnTop,
  heading,
  paragraph,
  list,
  cta
}) => {
  return (
    <Wrapper className="max-width">
      {ctaOnTop && (
        <div className="ctaOnTop">
          {ctaOnTop.map((cta, i) => (
            <Button
              theme={cta.theme}
              to={cta.href}
              key={i}
            >{cta.text}</Button>
          ))}
        </div>
      )}
      <header>
        <Heading type="h2">{heading}</Heading>
        <hr />
        <Markdown className="paragraph">{paragraph}</Markdown>
      </header>
      <ul className="wrapper">
        {list.map((item, i) => (
          <li key={i}>
            <GatsbyImage
              image={item.img.asset.gatsbyImageData}
              alt={item.img.asset.altText || ''}
              objectFit="contain"
              className="img"
            />
            <Markdown>{item.title}</Markdown>
          </li>
        ))}
      </ul>
      {cta && (
        <div className="cta-wrapper">
          {cta.map((cta, i) => (
            <Button theme={cta.theme} to={cta.href} key={i}>{cta.text}</Button>
          ))}
        </div>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  @media (min-width: 599px){
    text-align: center;
  }
  .ctaOnTop {
    margin-bottom: ${Clamp(24, 24, 48, 'px')};
  }
  header {
    max-width: 1024px;
    margin: 0 auto;
    h2 {
      color: var(--primary-500);
    }
    .paragraph {
      font-size: ${Clamp(20, 22, 32)};
      p:not(:last-child){
        margin-bottom: 16px;
      }
    }
  }
  .wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    @media (max-width: 1099px){
      grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 799px){
      grid-template-columns: repeat(2, 1fr);
    }
    list-style-type: none;
    gap: 32px 24px;
    margin-top: ${Clamp(20, 32, 48, 'px')};
    text-align: left;
    li {
      max-width: 230px;
      .img {
        img {
          width: 120px;
          height: 120px;
        }
      }
      p {
        font-weight: 600;
        margin-top: ${Clamp(16, 24, 24, 'px')};
        font-size: ${Clamp(16, 20, 20)};
      }
    }
  }
  .cta-wrapper {
    margin-top: ${Clamp(42, 62, 82, 'px')};
  }
`

export default BenefitsSection;
