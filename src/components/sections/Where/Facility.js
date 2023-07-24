import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
import { Clamp } from '../../../utils/functions';
import Markdown from '../../../utils/Markdown';
import Button from '../../atoms/Button';

const Facility = ({ data }) => {
  return (
    <Wrapper className='max-width'>
      {data.map((item, i) => (
        <div className="item" key={i}>
          <GatsbyImage
            image={item.img.asset.gatsbyImageData}
            alt={item.img.asset.altText || ''}
            className="icon"
          />
          <Markdown className="title">{item.title}</Markdown>
          <hr />
          <Markdown className="description">{item.description}</Markdown>
          <div className="cta-wrapper">
            {item.cta.map((cta, i) => (
              <Button variant="light" theme={cta.theme} to={cta.href} key={i}>{cta.text}</Button>
            ))}
          </div>
        </div>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: ${Clamp(24, 24, 32, 'px')};
  .item {
    display: flex;
    flex-direction: column;
    align-items: start;
    background-color: var(--primary-500);
    padding: ${Clamp(32, 32, 48, 'px')} ${Clamp(16, 16, 32, 'px')};
    color: var(--neutral-100);
    border-radius: 20px;
    .icon {
      margin-bottom: ${Clamp(16, 16, 24, 'px')};
    }
    .title {
      font-size: ${Clamp(24, 24, 32)};
      font-weight: 600;
    }
    .description {
      font-size: ${Clamp(16, 24, 24)};
      margin-bottom: ${Clamp(16, 16, 24, 'px')};
      a {
        color: inherit;
      }
    }
    .cta-wrapper {
      width: 100%;
      margin-top: auto;
      gap: 16px;
      display: grid;
      grid-template-columns: auto auto;
      .cta {
        font-size: ${Clamp(18, 20, 20)};
        padding-left: 24px;
        padding-right: 24px;
      }
    }
  }
  @media (max-width: 1329px){
    .item {
      .cta-wrapper {
        grid-template-columns: auto;
      }
    }
  }
  @media (max-width: 1099px){
    grid-template-columns: 1fr;
  }
`

export default Facility;