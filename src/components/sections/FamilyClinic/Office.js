import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";
import Button from "../../atoms/Button";
import Heading from "../../atoms/Heading";

const Office = ({
  data: {
    office_Heading,
    office_Cta,
    office_Icon,
  }
}) => {
  const { global: { info } } = useStaticQuery(graphql`
    query {
      global: sanityGlobal {
        info {
          map {
            lat
            lng
            alt
          }
        }
      }
    }
  `)
  return (
    <Wrapper>
      <div className="max-width">
        <Heading type="h2">{office_Heading}</Heading>
        <hr />
        <iframe
          src={`https://maps.google.com/maps?q=${info.map.lat},${info.map.lng}&z=${info.map.alt}&ie=UTF8&iwloc=&output=embed&hl=pl`}
          width='100%'
          height='500'
          loading="lazy"
          title="Położenie Ośrodka Zdrowia w Turośni Kościelnej na mapie"
          className="map"
        ></iframe>
        <div className="cta-wrapper">
          {office_Cta.map((cta, i) => (
            <Button variant="light" theme={cta.theme} to={cta.href} key={i}>{cta.text}</Button>
          ))}
        </div>
      </div>
      <GatsbyImage
        image={office_Icon.asset.gatsbyImageData}
        alt={office_Icon.asset.altText || ''}
        className="icon"
        objectFit="contain"
        objectPosition="right"
      />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  > .max-width {
    max-width: 1024px;
  }
  padding: ${Clamp(48, 48, 82, 'px')} 0;
  z-index: 2;
  background-color: var(--primary-500);
  color: var(--neutral-100);
  position: relative;
  @media (min-width: 599px){
    text-align: center;
  }
  .cta-wrapper {
    margin-top: ${Clamp(24, 24, 48, 'px')};
  }
  .icon {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    z-index: -1;
    max-height: 500px;
    @media (max-width: 1680px) {
      opacity: .1;
      top: unset;
      bottom: 0;
      transform: unset;
    }
  }
`

export default Office;