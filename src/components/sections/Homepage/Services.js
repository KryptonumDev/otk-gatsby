import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";
import Heading from "../../atoms/Heading";

const Services = ({
  data: {
    services_Heading,
    services_Paragraph,
    services_List,
  }
}) => {
  return (
    <Wrapper>
      <div className="max-width">
        <header>
          <Heading type="h2">{services_Heading}</Heading>
          <hr />
          <ReactMarkdown className="paragraph">{services_Paragraph}</ReactMarkdown>
        </header>
        <ul className="wrapper">
          {services_List.map((item, i) => (
            <li key={i}>
              <GatsbyImage
                image={item.img.asset.gatsbyImageData}
                alt={item.img.asset.altText || ''}
                className="img"
              />
              <ReactMarkdown>{item.paragraph}</ReactMarkdown>
            </li>
          ))}
        </ul>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  header {
    max-width: 1024px;
    margin: 0 auto;
    text-align: center;
    h2 {
      color: var(--primary-500);
    }
    .paragraph {
      font-size: ${Clamp(20, 22, 32)};
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
    li {
      max-width: 230px;
      p {
        font-weight: 600;
        margin-top: ${Clamp(16, 24, 24)};
        font-size: ${Clamp(16, 20, 20)};
      }
    }
  }
`

export default Services;