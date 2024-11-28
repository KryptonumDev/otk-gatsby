import { GatsbyImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";
import { Clamp } from "../../utils/functions";
import Heading from "../atoms/Heading";
import NewsletterForm from "../organisms/NewsletterForm";

const Newsletter = () => {
  const {
    global: { newsletter }
  } = useStaticQuery(graphql`
    query {
      global: sanityGlobal {
        newsletter {
          heading
          subheading
          cta
          img {
            asset {
              altText
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    }
  `)

  return (
    <Wrapper className="max-width">
      <div className="copy">
        <Heading type="h2">{newsletter.heading}</Heading>
        <hr />
        <Heading type="h3">{newsletter.subheading}</Heading>
        <NewsletterForm cta={newsletter.cta} variant='dark' />
      </div>
      <GatsbyImage
        image={newsletter.img.asset.gatsbyImageData}
        alt={newsletter.img.asset.altText || ''}
        class="img"
        objectFit="contain"
      />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${Clamp(48, 48, 64, 'px')} ${Clamp(48, 64, 82, 'px')};
  .copy {
    > h2 {
      color: var(--primary-500);
    }
    > h3 {
      font-weight: 400;
      color: var(--primary-500);
      font-size: ${Clamp(20, 20, 24)};
      margin-bottom: ${Clamp(24, 24, 32, 'px')};
    }
  }
  .img {
    margin: 0 auto;
    width: 62%;
    max-width: 400px;
  }
  @media (max-width: 899px){
    grid-template-columns: 1fr;
  }
`

export default Newsletter;
