import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Clamp } from "../../utils/functions";
import Button from "../atoms/Button";
import Heading from "../atoms/Heading";
import ImageDecorative from "../atoms/ImageDecorative";

const OurStaff = ({
  data: {
    heading,
    subheading,
    cta,
  }
}) => {
  const { staff } = useStaticQuery(graphql`
    query {
      staff: allSanityStaff {
        nodes {
          name
          position
          img {
            asset {
              altText
              gatsbyImageData(placeholder: NONE)
            }
          }
        }
      }
    }
  `)
  return (
    <Wrapper className="max-width">
      <Heading type="h2">{heading}</Heading>
      <hr />
      <Heading type="h3">{subheading}</Heading>
      <div className="wrapper">
        {staff.nodes.map((person, i) => (
          <div className="item" key={i}>
            <ImageDecorative data={person.img} />
            <Heading type="h3">{person.name}</Heading>
            <ReactMarkdown className="position">{person.position}</ReactMarkdown>
          </div>
        ))}
      </div>
      <Button theme={cta.theme}>{cta.text}</Button>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  @media (min-width: 599px){
    text-align: center;
  }
  h2 {
    color: var(--primary-500);
  }
  h3 {
    font-weight: 400;
  }
  .wrapper {
    margin: ${Clamp(42, 62, 82, 'px')} 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    @media (max-width: 1049px){
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 549px){
      grid-template-columns: 1fr;
    }
    gap: ${Clamp(32, 32, 48, 'px')};
    h3 {
      margin-bottom: 8px;
    }
    .position {
      font-size: ${Clamp(16, 20, 24)};
    }
  }
`

export default OurStaff;