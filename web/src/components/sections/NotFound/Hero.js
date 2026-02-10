import React from "react";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";
import Markdown from "../../../utils/Markdown";
import Button from "../../atoms/Button";
import Heading from "../../atoms/Heading";

const Hero = ({
  data: {
    hero_Heading,
    hero_Subheading,
    hero_Cta,
  }
}) => {
  return (
    <Wrapper>
      <div className="max-width">
        <Heading className="heading">{hero_Heading}</Heading>
        <Markdown className="subheading">{hero_Subheading}</Markdown>
        <Button theme={hero_Cta.theme} to={hero_Cta.href}>{hero_Cta.text}</Button>
        <Heart />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding-top: ${Clamp(48, 64, 96, 'px')};
  > .max-width {
    max-width: 1024px;
    text-align: center;
  }
  h1 {
    font-size: ${Clamp(48, 64, 160)};
    color: var(--primary-500);
  }
  .subheading {
    font-size: ${Clamp(20, 20, 42)};
    margin: ${Clamp(16, 16, 24, 'px')} 0 ${Clamp(32, 32, 48, 'px')};
  }
  .heart {
    display: block;
    width: 80%;
    max-width: 610px;
    height: auto;
    margin: 48px auto 0;
  }
`

const Heart = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='642'
    height='569'
    fill='none'
    viewBox='0 0 642 569'
    className="heart"
  >
    <path
      fill='#0FE3AF'
      stroke='#fff'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='28.175'
      d='M321 554.351S14.5 382.711 14.5 174.291a159.38 159.38 0 01306.5-61.3 159.381 159.381 0 01306.5 61.3c0 208.42-306.5 380.06-306.5 380.06z'
    ></path>
    <path
      stroke='#fff'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='28.175'
      d='M26.8 287.637h122.762l49.105-73.657 98.209 147.314 49.105-73.657h73.656'
    ></path>
  </svg>
)

export default Hero;