import React from 'react';
import styled from 'styled-components';
import { Clamp } from '../../../utils/functions';
import Markdown from '../../../utils/Markdown';
import Button from '../../atoms/Button';
import Heading from '../../atoms/Heading';

const Pricing = ({
  data: {
    pricing_Heading,
    pricing_List,
    pricing_Cta,
  }
}) => {
  return (
    <Wrapper className='max-width'>
      <div className="max-width">
        <Heading type="h2">{pricing_Heading}</Heading>
        <ul className="wrapper">
          {pricing_List.map((item, i) => (
            <li key={i}>
              <Markdown className="name">{item.name}</Markdown>
              <Markdown className="price">{item.price}</Markdown>
            </li>
          ))}
        </ul>
        <div className="cta-wrapper">
          {pricing_Cta.map((cta, i) => (
            <Button theme={cta.theme} to={cta.href} key={i}>{cta.text}</Button>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  > .max-width {
    max-width: 768px;
    width: 100%;
    margin-left: 0;
  }
  .wrapper {
    margin: ${Clamp(48, 64, 82, 'px')} 0;
    list-style-type: none;
    li {
      display: grid;
      @media (min-width: 699px){
        grid-template-columns: 1fr auto;
      }
      gap: 12px 32px;
      .name {
        font-size: ${Clamp(20, 20, 24)};
        font-weight: 600;
      }
      .price {
        font-size: ${Clamp(20, 20, 24)};
      }
      &:not(:last-child){
        border-bottom: 3px solid var(--secondary-500);
        margin-bottom: 32px;
        padding-bottom: 32px;
      }
    }
  }
`

export default Pricing;