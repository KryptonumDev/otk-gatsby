import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { Clamp } from "../../utils/functions";
import Markdown from "../../utils/Markdown";
import Button from "../atoms/Button";
import Heading from "../atoms/Heading";

const Faq = ({ data }) => {
  return (
    <Wrapper className="max-width">
      <div className="copy">
        <Heading type="h2">{data.heading}</Heading>
        <hr />
        <Markdown className="paragraph">{data.paragraph}</Markdown>
        <div className="wrapper">
          {data.list.map((item, i) => (
            <details key={i}>
              <summary>
                <ChevronDown />
                <Markdown components={{ p: 'span' }}>{item.question}</Markdown>
              </summary>
              <Markdown className="answer">{item.answer}</Markdown>
            </details>
          ))}
        </div>
        <div className="cta-wrapper">
          {data.cta.map((cta, i) => (
            <Button theme={cta.theme} to={cta.href} key={i}>{cta.text}</Button>
          ))}
        </div>
      </div>
      <GatsbyImage
        image={data.icon.asset.gatsbyImageData}
        alt={data.icon.asset.altText || ''}
        className="icon"
        objectFit="contain"
      />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 48px;
  align-items: start;
  h2 {
    color: var(--primary-500);
  }
  .paragraph {
    font-size: ${Clamp(24, 24, 32)};
  }
  .icon {
    position: sticky;
    top: calc(50% - 200px);
    width: 62%;
    max-width: 400px;
    height: 400px;
    margin: 0 auto;
  }
  .wrapper {
    margin: ${Clamp(42, 62, 82, 'px')} 0;
    details {
      &:not(:last-child){
        border-bottom: 3px solid var(--secondary-500);
        margin-bottom: 32px;
        padding-bottom: 32px;
      }
      summary {
        svg {
          transition: .4s var(--easing);
        }
        &::marker,
        &::-webkit-details-marker {
          display: none;
        }
        font-size: ${Clamp(20, 20, 24)};
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: center;
        gap: 16px;
        cursor: pointer;
      }
      .answer {
        transform: translateY(-8px);
        opacity: 0;
        transition: transform .4s, opacity .4s;
        transition-timing-function: var(--easing);
        font-size: ${Clamp(16, 18, 20)};
        margin-top: ${Clamp(24, 24, 32, 'px')};
        > *:not(:last-child) {
          margin-bottom: 16px;
        }
      }
      &[open] {
        summary {
          svg {
            transform: rotateX(180deg);
          }
        }
        .answer {
          transform: translateY(0);
          opacity: 1;
        }
      }
    }
  }
  @media (max-width: 1049px){
    grid-template-columns: 1fr;
    .icon {
      height: unset;
    }
  }
`

const ChevronDown = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='23'
    height='15'
    fill='none'
    viewBox='0 0 23 15'
  >
    <path
      stroke='#4D77FF'
      strokeLinecap='round'
      strokeWidth='3.619'
      d='M2 2.163l9.5 9.5 9.5-9.5'
    ></path>
  </svg>
)

export default Faq;