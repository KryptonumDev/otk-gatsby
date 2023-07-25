import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import { Clamp } from "../../utils/functions";
import Markdown from "../../utils/Markdown";
import Heading from "../atoms/Heading";
import EbookForm from "../organisms/EbookForm";

const Ebook = ({ isEbookPage }) => {
  const {
    global: { ebook }
  } = useStaticQuery(graphql`
    query {
      global: sanityGlobal {
        ebook {
          heading
          subheading
          paragraph
          formCta
          cta {
            theme
            href
            text
          }
          icon {
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
    <Wrapper>
      <div className="max-width">
        <div className="copy">
          <Heading type="h2">{ebook.heading}</Heading>
          <hr />
          <Heading type="h3">{ebook.subheading}</Heading>
          <Markdown className="paragraph">{ebook.paragraph}</Markdown>
          <EbookForm data={ebook} isEbookPage={isEbookPage} />
        </div>
        <GatsbyImage
          image={ebook.icon.asset.gatsbyImageData}
          alt={ebook.icon.asset.altText || ''}
          class="icon"
          objectFit="contain"
        />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  overflow: hidden;
  background-color: var(--primary-500);
  color: var(--neutral-100);
  padding: ${Clamp(48, 48, 82, 'px')} 0;
  > .max-width {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: ${Clamp(48, 48, 64, 'px')} ${Clamp(48, 64, 82, 'px')};
    .icon {
      order: -1;
      margin-left: -80%;
    }
  }
  .copy {
    > h3 {
      font-weight: 600;
      font-size: ${Clamp(16, 16, 32)};
      strong {
        font-weight: 600;
        color: var(--secondary-500);
      }
    }
  }
  .paragraph {
    font-size: ${Clamp(16, 16, 20)};
    p:not(:last-child){
      margin-bottom: 16px;
    }
    margin: ${Clamp(16, 24, 24, 'px')} 0 ${Clamp(24, 24, 32, 'px')};
  }
  @media (max-width: 899px){
    > .max-width {
      grid-template-columns: 1fr;
      .icon {
        order: unset;
        margin: 0 auto;
        max-width: 80%;
      }
    }
  }
`

export default Ebook;