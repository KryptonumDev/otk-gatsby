import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";
import Markdown from "../../../utils/Markdown";
import Heading from "../../atoms/Heading";

const Feautures = ({
  data: {
    features_Heading,
    features_List,
  }
}) => {
  return (
    <Wrapper className="max-width">
      <Heading className="heading" type="h2">{features_Heading}</Heading>
      <div className="wrapper">
        {features_List.map((item, i) => (
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
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .heading {
    text-align: center;
    margin-bottom: ${Clamp(42, 62, 82, 'px')};
  }
  color: var(--primary-500);
  .wrapper {
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
        font-size: ${Clamp(16, 16, 18)};
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
    .heading {
      text-align: left;
    }
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

export default Feautures;