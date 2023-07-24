import React from 'react';
import styled from 'styled-components';
import { Clamp } from '../../../utils/functions';
import Markdown from '../../../utils/Markdown';
import Button from '../../atoms/Button';
import Heading from '../../atoms/Heading';

const Rules = ({
  data: {
    rules_Heading,
    rules_Subheading,
    rules_List,
  }
}) => {
  return (
    <Wrapper className='max-width'>
      <header>
        <Heading type="h2">{rules_Heading}</Heading>
        <hr />
        <Heading type="h3">{rules_Subheading}</Heading>
      </header>
      <ol className="wrapper">
        {rules_List.map((item, i) => (
          <li key={i}>
            <Markdown className="listItem">{item.string}</Markdown>
            {item.extended && (
              <div className="extended">
                <div className="extened-wrapper">
                  {item.grid.map((item, i) => (
                    <div className="item" key={i}>
                      <Markdown className='title'>{item.title}</Markdown>
                      <hr />
                      <Markdown className='description'>{item.description}</Markdown>
                    </div>
                  ))}
                </div>
                <div className="cta-wrapper">
                  {item.cta.map((cta, i) => (
                    <Button theme={cta.theme} to={cta.href} key={i}>{cta.text}</Button>
                  ))}
                </div>
              </div>
            )}
          </li>
        ))}
      </ol>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  header {
    max-width: 768px;
    margin-bottom: ${Clamp(48, 64, 82, 'px')};
  }
  .wrapper {
    padding-left: 1em;
    font-size: ${Clamp(18, 20, 24)};
    li {
      .listItem {
        max-width: 768px;
      }
      &:not(:last-child) {
        margin-bottom: 24px;
      }
    }
  }
  .extended {
    .extened-wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      @media (max-width: 1049px){
        grid-template-columns: 1fr;

      }
      gap: ${Clamp(24, 24, 32, 'px')};
      > .item {
        background-color: var(--primary-500);
        padding: ${Clamp(32, 32, 48, 'px')} ${Clamp(16, 16, 48, 'px')};
        border-radius: 20px;
        color: var(--neutral-100);
        a {
          color: inherit;
        }
        .title {
          font-size: ${Clamp(24, 24, 24)};
          font-weight: 600;
        }
        .description {
          font-size: ${Clamp(18, 18, 20)};
        }
        hr {
          margin: 24px 0;
        }
      }
      margin-top: 24px;
      margin-bottom: ${Clamp(32, 32, 48, 'px')};
    }
    .cta-wrapper {
      justify-content: center;
      width: 100%;
    }
  }
`

export default Rules;