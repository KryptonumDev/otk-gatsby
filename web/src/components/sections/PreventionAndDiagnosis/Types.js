import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import Heading from '../../atoms/Heading';
import Button from '../../atoms/Button';
import Markdown from '../../../utils/Markdown';
import { Clamp } from '../../../utils/functions';

const Types = ({
  data: {
    types_Heading,
    types_List,
    types_Cta,
    types_Icon,
  }
}) => {
  return (
    <Wrapper className='max-width'>
      <GatsbyImage
        image={types_Icon.asset.gatsbyImageData}
        alt={types_Icon.asset.altText || ''}
        className="icon"
        objectFit='contain'
        objectPosition='right'
      />
      <div className="max-width">
        <Heading type="h2">{types_Heading}</Heading>
        <hr />
        <div className="wrapper">
          {types_List.map((item, i) => (
            <div className="item" key={i}>
              <Markdown className="title">{item.title}</Markdown>
              <hr />
              <Markdown className="description">{item.description}</Markdown>
            </div>
          ))}
        </div>
        <div className="cta-wrapper">
          {types_Cta.map((cta, i) => (
            <Button theme={cta.theme} to={cta.href} key={i}>{cta.text}</Button>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  > .max-width {
    width: 100%;
    max-width: 768px;
    margin-left: 0;
  }
  position: relative;
  .icon {
    position: absolute;
    @media (min-width: 1760px){
      overflow: visible;
    }
    img {
      transform: translateX(20%);
    }
    right: calc(var(--pageMargin) * -1);
    top: 0;
    transform: translateY(-50%);
    height: 300px;
  }
  @media (max-width: 1149px){
    padding-top: 250px;
    .icon {
      transform: translateY(-25%);
    }
  }
  .wrapper {
    .item {
      &:not(:last-child){
        margin-bottom: ${Clamp(48, 48, 82, 'px')};
      }
      hr {
        margin: 16px 0;
        max-width: 89px;
      }
      .title {
        font-size: ${Clamp(24, 24, 32)};
        font-weight: 600;
      }
      .description {
        font-size: ${Clamp(16, 18, 20)};
      }
    }
  }
  .cta-wrapper {
    margin-top: ${Clamp(48, 48, 82, 'px')};
  }
`

export default Types;