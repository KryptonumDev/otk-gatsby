import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import PortableContent from "../../organisms/PortableContent";

const Content = ({ data, icon }) => {
  return (
    <Wrapper className="max-width">
      <PortableContent data={data} />
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
  gap: 48px;
  @media (min-width: 749px) {
    grid-template-columns: 2fr 1fr;
    align-items: start;
  }
  .icon {
    position: sticky;
    top: calc(50% - 200px);
    width: 62%;
    max-width: 400px;
    height: 400px;
    margin: 0 auto;
  }
`

export default Content;
