import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import Markdown from '../../utils/Markdown';
import Heading from '../atoms/Heading';
import Button from '../atoms/Button';
import { Clamp } from '../../utils/functions';

const CtaTiles = ({ heading, paragraph, img, list }) => {
  return (
    <Wrapper className='max-width'>
      <header>
        <div>
          <Heading type="h2">{heading}</Heading>
          <Markdown className="paragraph">{paragraph}</Markdown>
          <hr />
        </div>
        <GatsbyImage
          image={img.asset.gatsbyImageData}
          alt={img.asset.altText || ''}
          className="img"
          objectFit='contain'
        />
      </header>
      {list?.length > 0 && (
        <div className="tiles">
          {list.map((item, i) => (
            <div className="item" key={i}>
              <GatsbyImage
                image={item.img.asset.gatsbyImageData}
                alt={item.img.asset.altText || ''}
                className="icon"
              />
              <Markdown className="title">{item.title}</Markdown>
              <hr />
              <Markdown className="description">{item.description}</Markdown>
              {item.cta && (
                <div className="cta-wrapper">
                  {item.cta.map((cta, i) => (
                    <Button variant="light" theme={cta.theme} to={cta.href} key={i}>{cta.text}</Button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  header {
    display: grid;
    grid-template-columns: 2fr 1fr;
    margin-bottom: clamp(3rem, calc(5vw / 0.48), 6rem);
    @media (max-width: 599px){
      grid-template-columns: 1fr;
    }
    gap: 24px 48px;
    align-items: center;
    max-width: 1280px;
    h2 {
      color: var(--primary-300);
      margin-bottom: 24px;
    }
    .paragraph {
      font-size: ${Clamp(20, 20, 24)};
    }
    hr {
      margin-bottom: 0;
    }
    .img {
      width: 62%;
      margin: 0 auto;
    }
  }
  .tiles {
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
        font-size: clamp(1rem, calc(1.25vw / 0.48), 1.25rem);
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
  }
`

export default CtaTiles;
