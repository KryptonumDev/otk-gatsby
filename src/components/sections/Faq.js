import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import Button from "../atoms/Button";
import Heading from "../atoms/Heading";

const Faq = ({ data }) => {
  return (
    <Wrapper className="max-width">
      <div className="copy">
        <Heading type="h2">{data.heading}</Heading>
        <hr />
        <ReactMarkdown>{data.paragraph}</ReactMarkdown>
        <div className="wrapper">
          {data.list.map((item, i) => (
            <p key={i}>{item.question}</p>
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
      />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: start;
  .icon {
    position: sticky;
    top: 0;
  }
`

export default Faq;