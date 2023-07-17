import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import Heading from "../atoms/Heading";
import UnorderedList from "../organisms/UnorderedList";
import { Clamp } from "../../utils/functions";

const CompanyInfo = () => {
  const { global: { info } } = useStaticQuery(graphql`
    query {
      global: sanityGlobal {
        info {
          heading
          subheading
          list
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
    <Wrapper className="max-width">
      <Heading className="heading" type="h2">{info.heading}</Heading>
      <div className="copy">
        <Heading className="subheading" type="h3">{info.subheading}</Heading>
        <hr />
        <UnorderedList data={info.list} />
      </div>
      <iframe
        src={`https://maps.google.com/maps?q=${info.map.lat},${info.map.lng}&z=${info.map.alt}&ie=UTF8&iwloc=&output=embed&hl=pl`}
        width='100%'
        height='500'
        loading="lazy"
        title="Położenie Ośrodka Zdrowia w Turośni Kościelnej na mapie"
        className="map"
      ></iframe>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  @media (min-width: 1099px){
    grid-template-columns: 1fr 1fr;
    .heading {
      grid-column: 3/1;
    }
  }
  column-gap: 32px;
  .heading {
    @media (min-width: 599px){
      text-align: center;
    }
    color: var(--primary-500);
    margin-bottom: ${Clamp(42, 62, 82, 'px')};
  }
  .copy {
    margin-bottom: ${Clamp(32, 32, 48, 'px')};
  }
`

export default CompanyInfo;