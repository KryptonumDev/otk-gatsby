import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import Button from "../../atoms/Button";
import Heading from "../../atoms/Heading";
import { Clamp } from "../../../utils/functions";

const Appointment = ({
  data: {
    appointment_Heading,
    appointment_Subheading,
    appointment_Cta,
    appointment_Img,
  }
}) => {
  return (
    <Wrapper className="max-width">
      <div className="copy">
        <Heading type="h2">{appointment_Heading}</Heading>
        <hr />
        <Heading type="h3">{appointment_Subheading}</Heading>
        <div className="cta-wrapper">
          {appointment_Cta.map((cta, i) => (
            <Button theme={cta.theme} to={cta.href} key={i}>{cta.text}</Button>
          ))}
        </div>
      </div>
      <GatsbyImage
        image={appointment_Img.asset.gatsbyImageData}
        alt={appointment_Img.asset.altText || ''}
        className="icon"
        objectFit="contain"
      />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 999px){
    grid-template-columns: 1fr;
  }
  gap: ${Clamp(32, 32, 48, 'px')};
  align-items: center;
  color: var(--primary-500);
  .cta-wrapper {
    margin-top: ${Clamp(24, 24, 48, 'px')}
  }
  .icon {
    width: 62%;
    max-width: 500px;
    margin: auto;
  }
`

export default Appointment;