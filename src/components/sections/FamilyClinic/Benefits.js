import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";
import Markdown from "../../../utils/Markdown";

const Benefits = ({ data }) => {
  return (
    <Wrapper className="max-width">
      {data.map((benefit, i) => (
        <div key={i} className="item">
          <div className="icon">
            <GatsbyImage
              image={benefit.img.asset.gatsbyImageData}
              alt={benefit.img.asset.altText || ''}
              objectFit="contain"
            />
          </div>
          <Markdown className="title">{benefit.title}</Markdown>
          <hr />
        </div>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  @media (max-width: 1149px){
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 599px){
    grid-template-columns: 1fr;
  }
  gap: ${Clamp(24, 24, 32, 'px')};
  .item {
    padding: ${Clamp(24, 24, 32, 'px')};
    background-color: var(--primary-500);
    color: var(--neutral-100);
    border-radius: 15px;
    display: grid;
    grid-template-rows: 1fr auto auto;
    hr {
      margin: 24px 0 0 0;
    }
    .icon {
      margin-bottom: 24px;
      width: ${Clamp(60, 60, 80, 'px')};
      height: ${Clamp(60, 60, 80, 'px')};
      border-radius: 50%;
      background-color: var(--primary);
      display: grid;
      > * {
        width: 60%;
        margin: auto;
      }
    }
    .title {
      font-size: ${Clamp(16, 18, 22)};
    }
  }
`

export default Benefits;