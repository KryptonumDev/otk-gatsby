import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";
import Markdown from "../../../utils/Markdown";
import Button from "../../atoms/Button";
import Heading from "../../atoms/Heading";

const Prevention = ({
  data: {
    prevention_Heading,
    prevention_Paragraph,
    prevention_ListTitle,
    prevention_List,
    prevention_CtaTitle,
    prevention_Cta,
  }
}) => {
  return (
    <Wrapper className="max-width">
      <header>
        <Heading type="h2">{prevention_Heading}</Heading>
        <hr />
        <Markdown className="paragraph">{prevention_Paragraph}</Markdown>
      </header>
      <Markdown className="title">{prevention_ListTitle}</Markdown>
       <ul className="wrapper">
          {prevention_List.map((item, i) => (
            <li key={i}>
              <div className="icon">
                <GatsbyImage
                  image={item.img.asset.gatsbyImageData}
                  alt={item.img.asset.altText || ''}
                  className="img"
                  objectFit="contain"
                />
              </div>
              <Markdown>{item.title}</Markdown>
            </li>
          ))}
        </ul>
      <Markdown className="title">{prevention_CtaTitle}</Markdown>
      <div className="cta-wrapper">
          {prevention_Cta.map((cta, i) => (
            <Button theme={cta.theme} to={cta.href} key={i}>{cta.text}</Button>
          ))}
        </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  &.max-width {
    max-width: 1024px;
  }
  h2 {
    color: var(--primary-500);
  }
  @media (min-width: 600px){
    text-align: center;
  }
  header,
  .title {
    max-width: 1024px;
    margin: 0 auto;
  }
  .title {
    font-size: ${Clamp(20, 20, 28)};
    font-weight: 600;
    margin: ${Clamp(42, 64, 72, 'px')} auto ${Clamp(32, 32, 48, 'px')};
  }
  .paragraph {
    font-size: ${Clamp(16, 20, 24)};
  }
  .wrapper {
    text-align: left;
    display: grid;
    list-style-type: none;
    grid-template-columns: repeat(3, 1fr);
    @media (max-width: 899px){
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 349px){
      grid-template-columns: 1fr;
    }
    list-style-type: none;
    gap: ${Clamp(32, 32, 48, 'px')} ${Clamp(24, 32, 32, 'px')};
    li {
      max-width: 250px;
      .icon {
        width: ${Clamp(64, 72, 100, 'px')};
        height: ${Clamp(64, 72, 100, 'px')};
        background-color: var(--primary);
        display: grid;
        border-radius: 100%;
        .img {
          width: 62%;
          height: 62%;
          margin: auto;
        }
      }
      p {
        font-weight: 600;
        margin-top: ${Clamp(16, 24, 24, 'px')};
        font-size: ${Clamp(16, 20, 20)};
      }
    }
  }
`

export default Prevention;