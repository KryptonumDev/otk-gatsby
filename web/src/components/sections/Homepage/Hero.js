import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import { Clamp, removeMarkdown } from "../../../utils/functions";
import Markdown from "../../../utils/Markdown";
import Button from "../../atoms/Button";
import Heading from "../../atoms/Heading";

const Hero = ({
  data: {
    hero_Heading,
    hero_Subheading,
    hero_Paragraph,
    hero_Cta,
    hero_Img,
  }
}) => {
  return (
    <Wrapper>
      <div className="max-width">
        <header>
          <Heading className="heading">{`${hero_Heading} *${removeMarkdown(hero_Subheading)}*`}</Heading>
          <hr />
          <Markdown className="paragraph">{hero_Paragraph}</Markdown>
          <div className="cta-wrapper">
            {hero_Cta.map((cta, i) => (
              <Button variant="light" theme={cta.theme} to={cta.href} key={i}>{cta.text}</Button>
            ))}
          </div>
        </header>
        <GatsbyImage
          image={hero_Img.asset.gatsbyImageData}
          alt={hero_Img.asset.altText || ''}
          objectFit="contain"
          objectPosition="bottom"
          className="img"
          loading="eager"
        />
        <Decoration />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background-color: var(--primary-500);
  color: var(--neutral-100);
  overflow: hidden;
  position: relative;
  > .max-width {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  header {
    padding: ${Clamp(64, 64, 144, 'px')} 0;
    .heading em {
      margin-top: ${Clamp(8, 16, 24, 'px')};
      display: block;
      font-style: normal;
      font-weight: 400;
      font-size: ${Clamp(24, 16, 38)};
    }
    .paragraph {
      font-size: ${Clamp(16, 20, 24)};
      margin-bottom: ${Clamp(24, 32, 48, 'px')};
    }
  }
  .img {
    z-index: 2;
    align-self: end;
    max-height: calc(100% - ${Clamp(64, 64, 144, 'px')});
    margin-right: calc(var(--pageMargin) * -1);
  }
  .decoration {
    position: absolute;
    width: 50%;
    max-width: 750px;
    max-height: calc(100% - 64px);
    right: 0;
    bottom: 0;
    height: auto;
  }
  @media (max-width: 1229px){
    > .max-width {
      grid-template-columns: 1fr;
    }
    header {
      padding: ${Clamp(34, 48, 62, 'px')} 0;
    }
    .img {
      margin: 0 auto;
      max-height: 100%;
      max-width: 768px;
    }
    .decoration {
      width: 88%;
      max-height: 60%;
    }
  }
`

const Decoration = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='824'
    height='932'
    fill='none'
    viewBox='0 0 824 932'
    className="decoration"
  >
    <path
      fill='#0152A8'
      d='M445.564 1052.32c-135.475-78.193-181.892-251.383-103.676-386.826l302.52-523.857C722.624 6.194 895.855-40.212 1031.33 37.987c135.47 78.197 181.89 251.387 103.67 386.83L832.485 948.674c-78.216 135.446-251.447 181.846-386.921 103.646z'
    ></path>
    <path
      fill='#0FE3AF'
      d='M727.436 1054.81C591.961 1133 418.731 1086.6 340.514 951.154L37.995 427.298C-40.22 291.855 6.195 118.665 141.67 40.467 277.145-37.731 450.376 8.675 528.592 144.118l302.52 523.856c78.216 135.443 31.799 308.633-103.676 386.836z'
    ></path>
    <path
      fill='#3DB8ED'
      d='M340.33 667.381c-78.49 135.613-31.772 309.101 104.347 387.499 136.119 78.39 310.094 32.01 388.584-103.606l3.103-5.361c45.008-83.656 46.915-187.861-4.127-276.05L585.311 243.276 340.33 667.381z'
    ></path>
  </svg>
)
 
export default Hero;