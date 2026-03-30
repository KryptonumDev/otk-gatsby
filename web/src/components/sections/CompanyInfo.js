import React from "react";
import styled from "styled-components";
import Heading from "../atoms/Heading";
import UnorderedList from "../organisms/UnorderedList";
import { Clamp } from "../../utils/functions";

const CompanyInfo = ({ heading, subheading, list, map }) => {
  return (
    <Wrapper className="max-width">
      <Heading className="heading" type="h2">{heading}</Heading>
      <div className="copy">
        <Heading className="subheading" type="h3">{subheading}</Heading>
        <hr />
        <UnorderedList data={list} />
      </div>
      <iframe
        src={`https://maps.google.com/maps?q=${map.lat},${map.lng}&z=${map.alt}&ie=UTF8&iwloc=&output=embed&hl=pl`}
        width='768'
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
  align-items: center;
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
