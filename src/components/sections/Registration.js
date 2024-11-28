import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import { Clamp } from "../../utils/functions";
import Markdown from "../../utils/Markdown";
import Button from "../atoms/Button";
import Heading from "../atoms/Heading";

const Registration = ({
  data: {
    registration_Heading,
    registration_Paragraph,
    registration_Has_Title,
    registration_Has_Paragraph,
    registration_Has_Cta,
    registration_HasNot_Title,
    registration_HasNot_Heading,
    registration_HasNot_Subheading,
    registration_HasNot_Paragraph,
    registration_HasNot_List,
  },
  ...props
}) => {
  return (
    <Wrapper className="max-width" {...props}>
      <header>
        <Heading type="h2">{registration_Heading}</Heading>
        <Markdown className="paragraph">{registration_Paragraph}</Markdown>
      </header>
      <div className="option">
        <div className="title">
          <Has />
          <Markdown>{registration_Has_Title}</Markdown>
          <hr />
        </div>
        <Markdown className="list">{registration_Has_Paragraph}</Markdown>
        <div className="cta-wrapper">
          {registration_Has_Cta.map((cta, i) => (
            <Button theme={cta.theme} to={cta.href} key={i}>{cta.text}</Button>
          ))}
        </div>
      </div>
      <div className="option">
        <div className="title">
          <HasNot />
          <Markdown>{registration_HasNot_Title}</Markdown>
          <hr />
        </div>
        <Heading type="h3">{registration_HasNot_Heading}</Heading>
        <Markdown className="subheading">{registration_HasNot_Subheading}</Markdown>
        <Markdown className="paragraph">{registration_HasNot_Paragraph}</Markdown>
        <div className="wrapper">
          {registration_HasNot_List.map((item, i) => (
            <div className="item" key={i}>
              <GatsbyImage
                image={item.img.asset.gatsbyImageData}
                alt={item.img.asset.altText || ''}
                className="img"
              />
              <Markdown className="title">{item.title}</Markdown>
              <Markdown className="description">{item.description}</Markdown>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  header {
    max-width: 768px;
    margin-bottom: ${Clamp(48, 64, 82, 'px')};
    h2 {
      color: var(--primary-300);
      margin-bottom: ${Clamp(16, 24, 32, 'px')};
    }
    .paragraph {
      font-size: ${Clamp(20, 20, 24)};
    }
  }
  .option {
    &:not(:last-child){
      margin-bottom: ${Clamp(48, 64, 82, 'px')};
    }
    .list {
      max-width: 768px;
      padding-left: 1em;
      margin-bottom: ${Clamp(24, 32, 48, 'px')};
      li:not(:last-child) {
        margin-bottom: 12px;
      }
      font-size: ${Clamp(20, 20, 24)};
    }
    > .title {
      margin-bottom: ${Clamp(24, 32, 48, 'px')};
      background-color: var(--primary-500);
      color: var(--neutral-100);
      border-radius: 12px;
      padding: ${Clamp(32, 48, 64, 'px')} ${Clamp(24, 24, 32, 'px')};
      font-size: ${Clamp(24, 24, 32)};
      font-weight: 600;
      p {
        max-width: 400px;
        margin-top: ${Clamp(16, 16, 24, 'px')}
      }
      hr {
        margin-bottom: 0;
      }
    }
    h3 {
      color: var(--primary-300);
      font-size: ${Clamp(32, 32, 48)};
    }
    .subheading {
      margin: ${Clamp(24, 24, 32, 'px')} 0 ${Clamp(16, 16, 24, 'px')};
      font-size: ${Clamp(24, 24, 32)};
      font-weight: 600;
    }
    h3, .subheading, .paragraph {
      max-width: 768px;
    }
    .paragraph {
      font-size: ${Clamp(16, 18, 20)};
    }
  }
  .wrapper {
    margin-top: ${Clamp(24, 32, 48, 'px')};
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${Clamp(42, 42, 62, 'px')} ${Clamp(32, 32, 48, 'px')};
    .item {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: ${Clamp(24, 32, 48, 'px')};
      grid-template-rows: auto 1fr;
      .title {
        margin-bottom: 12px;
        font-size: ${Clamp(24, 24, 32)};
        font-weight: 600;
      }
      .description {
        font-size: ${Clamp(16, 18, 20)};
      }
      .img {
        grid-row: span 2;
        background-color: var(--secondary-500);
        width: 168px;
        height: 168px;
        border-radius: 20px;
        img {
          width: auto;
          height: auto;
          margin: auto;
        }
      }
    }
  }
  @media (max-width: 1099px){
    .wrapper {
      grid-template-columns: 1fr;
    }
  }
  @media (max-width: 549px){
    .wrapper {
      .item {
        grid-template-columns: 1fr;
        .img {
          width: 82px;
          height: 82px;
          margin-bottom: 16px;
          img {
            width: 62%;
            height: 62%;
          }
        }
      }
    }
  }
`

const Has = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='104'
    height='104'
    fill='none'
    viewBox='0 0 104 104'
  >
    <circle cx='52.484' cy='52.116' r='51.5' fill='#0FE3AF'></circle>
    <path
      stroke='#fff'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='8.583'
      d='M75.375 34.949L43.903 66.42 29.598 52.115'
    ></path>
  </svg>
)

const HasNot = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='104'
    height='104'
    fill='none'
    viewBox='0 0 104 104'
  >
    <circle cx='51.984' cy='52.337' r='51.5' fill='#4D77FF'></circle>
    <path
      stroke='#fff'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='8.583'
      d='M72.453 31.715l-41 42M31.453 31.715l41 42'
    ></path>
  </svg>
)

export default Registration;
