import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";
import Heading from "../../atoms/Heading";
import ContactForm from "../../organisms/ContactForm";

const Form = ({ heading, icon }) => {
  return (
    <Wrapper className="max-width">
      <div className="copy">
        <Heading type="h2">{heading}</Heading>
        <ContactForm />
      </div>
      <GatsbyImage
        image={icon.asset.gatsbyImageData}
        alt={icon.asset.altText || ''}
        className="icon"
        objectFit="contain"
      />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  @media (min-width: 1099px){
    grid-template-columns: 1.5fr 1fr;
  }
  form {
    max-width: 768px;
    display: grid;
    gap: 16px;
    @media (min-width: 549px){
      grid-template-columns: 1fr 1fr;
      .formItem-legal, .formItem-select, .formItem-textarea, .cta-wrapper {
        grid-column: 3/1;
      }
    }
  }
  gap: ${Clamp(48, 48, 64, 'px')} ${Clamp(48, 64, 82, 'px')};
  h2 {
    margin-bottom: ${Clamp(32, 32, 48, 'px')};
    color: var(--primary-500);
  }
  @media (max-width: 1098px){
    .icon {
      width: 62%;
      max-width: 400px;
      margin: 0 auto;
    }
  }
`

export default Form;
