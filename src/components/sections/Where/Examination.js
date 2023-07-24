import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import Markdown from '../../../utils/Markdown';
import Heading from '../../atoms/Heading';
import { Clamp } from '../../../utils/functions';

const Examination = ({
  data: {
    examination_Heading,
    examination_Paragraph,
    examination_Img,
  }
}) => {
  return (
    <Wrapper className='max-width'>
      <div className="copy">
        <Heading type="h2">{examination_Heading}</Heading>
        <Markdown className="paragraph">{examination_Paragraph}</Markdown>
        <hr />
      </div>
      <GatsbyImage
        image={examination_Img.asset.gatsbyImageData}
        alt={examination_Img.asset.altText || ''}
        className="img"
        objectFit='contain'
      />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
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
`

export default Examination;