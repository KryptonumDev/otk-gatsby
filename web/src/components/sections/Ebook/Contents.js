import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
import { Clamp } from '../../../utils/functions';
import Markdown from '../../../utils/Markdown';
import Heading from '../../atoms/Heading';

const Contents = ({
  data: {
    contents_Heading,
    contents_Title,
    contents_List,
    contents_Icon,
  }
}) => {
  return (
    <Wrapper className='max-width'>
      <GatsbyImage
        image={contents_Icon.asset.gatsbyImageData}
        alt={contents_Icon.asset.altText || ''}
        className="icon"
        objectFit='contain'
        objectPosition='right'
      />
      <div className="max-width">
        <Heading type="h2">{contents_Heading}</Heading>
        <hr />
        <Markdown className="title">{contents_Title}</Markdown>
        <ol className="wrapper">
          {contents_List.map((item, i) => (
            <li key={i}>
              <Markdown className="part">{item.part}</Markdown>
              <Markdown className="page">{item.page}</Markdown>
              <Markdown className="title">{item.title}</Markdown>
              {i+1 !== contents_List.length && (
                <hr />
              )}
            </li>
          ))}
        </ol>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
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
  > .max-width {
    width: 100%;
    max-width: 768px;
    margin-left: 0;
  }
  h2 {
    color: var(--primary-500);
  }
  .title {
    font-weight: 600;
    font-size: ${Clamp(24, 24, 32)};
  }
  .wrapper {
    margin-top: ${Clamp(64, 64, 82, 'px')};
    list-style-type: none;
    li {
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 12px;
      .part, .page {
        font-size: ${Clamp(16, 18, 20)};
      }
      .title {
        grid-column: 3/1;
        font-weight: 600;
        font-size: ${Clamp(24, 24, 32)};
      }
      hr {
        max-width: 89px;
      }
    }
  }
`

export default Contents;