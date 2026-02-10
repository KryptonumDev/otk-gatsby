import React from "react";
import styled from "styled-components";
import { Clamp } from "../../utils/functions";
import Button from "../atoms/Button";
import Heading from "../atoms/Heading";
import ImageDecorative from "../atoms/ImageDecorative";

const Hero = ({
  data: {
    hero_Heading,
    hero_Subheading,
    hero_Img,
    hero_Cta,
  },
  version="dark"
}) => {
  return (
    <Wrapper className={version}>
      <div className="max-width">
        <header>
          <Heading className="heading">{hero_Heading}</Heading>
          <hr />
          <Heading className="subheading" type="h2">{hero_Subheading}</Heading>
          {hero_Cta && (
            hero_Cta.map((cta, i) => (
              <Button
                theme={cta.theme}
                variant={version === 'dark' ? 'light' : 'dark'}
                to={cta.href}
                key={i}
              >{cta.text}</Button>
            ))
          )}
        </header>
        <ImageDecorative data={hero_Img} loading="eager" />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  color: var(--primary-500);
  &.dark {
    background-color: var(--primary-500);
    color: var(--neutral-100);
  }
  > .max-width {
    display: grid;
    @media (min-width: 1099px){
      grid-template-columns: 1fr 1fr;
    }
    gap: ${Clamp(32, 32, 48, 'px')} 32px;
    align-items: center;
  }
  position: relative;
  overflow: hidden;
  padding: ${Clamp(48, 64, 82, 'px')} 0;
  header {
    h2 {
      font-weight: 400;
      font-size: ${Clamp(24, 24, 32)};
      margin-bottom: ${Clamp(24, 24, 48, 'px')};
    }
  }
`
 
export default Hero;