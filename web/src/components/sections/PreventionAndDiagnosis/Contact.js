import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import Button from '../../atoms/Button';
import Heading from '../../atoms/Heading';

const Contact = ({
  data: {
    contact_Heading,
    contact_Cta,
    contact_Img,
  }
}) => {
  return (
    <Wrapper className='max-width'>
      <div className="copy">
        <Heading type="h2">{contact_Heading}</Heading>
        <hr />
        <div className="cta-wrapper">
          {contact_Cta.map((cta, i) => (
            <Button theme={cta.theme} to={cta.href} key={i}>{cta.text}</Button>
          ))}
        </div>
      </div>
      <GatsbyImage
        image={contact_Img.asset.gatsbyImageData}
        alt={contact_Img.asset.altText || ''}
        className="img"
        objectFit='contain'
      />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  @media (min-width: 768px){
    grid-template-columns: 1fr 1fr;
  }
  align-items: center;
  gap: 32px 48px;
  .copy {
    h2 {
      color: var(--primary-300);
    }
    .cta-wrapper {
      display: flex;
    }
  }
  .img {
    width: 62%;
    margin: 0 auto;
  }
`

export default Contact;