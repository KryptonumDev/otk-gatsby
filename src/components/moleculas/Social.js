import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import { Facebook, Instagram, Twitter } from "../atoms/Icons";

const Social = ({ as }) => {
  const {
    global
  } = useStaticQuery(graphql`
    query {
      global: sanityGlobal {
        facebook
        instagram
        twitter
      }
    }
  `)
  return (
    <Wrapper as={as} className="social">
      <a
        href={global.instagram}
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
      >
        <Instagram />
      </a>
      <a
        href={global.facebook}
        target="_blank"
        rel="noreferrer"
        aria-label="Facebook"
      >
        <Facebook />
      </a>
      <a
        href={global.twitter}
        target="_blank"
        rel="noreferrer"
        aria-label="Twitter"
      >
        <Twitter />
      </a>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px 24px;
  a {
    transition: opacity .4s, transform .4s;
    &:hover {
      opacity: .8;
    }
    &:active {
      transform: scale(.95);
    }
  }
`

export default Social;