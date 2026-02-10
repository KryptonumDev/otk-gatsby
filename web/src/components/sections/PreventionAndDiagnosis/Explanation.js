import React from 'react';
import styled from 'styled-components';
import { Clamp } from '../../../utils/functions';
import Markdown from '../../../utils/Markdown';
import Button from '../../atoms/Button';
import Heading from '../../atoms/Heading';

const Explanation = ({
  data: {
    explanation_Heading,
    explanation_Paragraph,
    explanation_Cta,
  }
}) => {
  return (
    <Wrapper className='max-width'>
      <div className="max-width">
        <Heading type="h2">{explanation_Heading}</Heading>
        <hr />
        <Markdown className="paragraph">{explanation_Paragraph}</Markdown>
        <div className="cta-wrapper">
          {explanation_Cta.map((cta, i) => (
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
  h2 {
    color: var(--primary-300);
  }
  .paragraph {
    font-size: ${Clamp(16, 18, 20)};
    p:not(:last-child){
      margin-bottom: 16px;
    }
  }
  .cta-wrapper {
    margin-top: ${Clamp(48, 48, 82, 'px')};
  }
`

export default Explanation;