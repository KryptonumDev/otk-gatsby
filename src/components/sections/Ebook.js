import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Clamp } from "../../utils/functions";
import Button from "../atoms/Button";
import Heading from "../atoms/Heading";
import FormCheckbox from "../moleculas/FormCheckbox";
import FormInput from "../moleculas/FormInput";

const Ebook = () => {
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
          <ReactMarkdown className="paragraph">{ebook.paragraph}</ReactMarkdown>
          <form action="/api/ebook">
            <FormInput
              type="email"
              placeholder="Email"
              name="email"
            />
            <FormCheckbox
              text={<>Akceptuję{' '}<Link to="polityka-prywatnosci">politykę prywatności</Link></>}
              name="legal"
            />
            <div className="cta-wrapper">
              <Button variant="light" theme="primary">{ebook.formCta}</Button>
              <Button variant="light" theme={ebook.cta.theme} to={ebook.cta.href}>{ebook.cta.text}</Button>
            </div>
          </form>
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
    gap: ${Clamp(48, 48, 64)} ${Clamp(48, 64, 82)};
    .icon {
      order: -1;
      margin-left: -80%;
    }
  }
  h3 {
    font-weight: 600;
    font-size: ${Clamp(16, 16, 32)};
    strong {
      font-weight: 600;
      color: var(--secondary-500);
    }
  }
  .paragraph {
    font-size: ${Clamp(16, 16, 20)};
    p:not(:last-child){
      margin-bottom: 16px;
    }
    margin: ${Clamp(16, 24, 24, 'px')} 0;
  }
`

export default Ebook;