import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";
import Button from "../../atoms/Button";
import { Check } from "../../atoms/Icons";
import ImageDecorative from "../../atoms/ImageDecorative";

const Learn = ({
  data: {
    learn_List,
    learn_Paragraph,
    learn_Cta,
    learn_Img,
  }
}) => {
  return (
    <Wrapper className="max-width">
      <div>
        <ReactMarkdown className="paragraph">{learn_Paragraph}</ReactMarkdown>
        <ul>
          {learn_List.map((item, i) => (
            <li key={i}>
              <Check />
              <ReactMarkdown>{item}</ReactMarkdown>
            </li>
          ))}
        </ul>
        <div className="cta-wrapper">
          {learn_Cta.map((cta, i) => (
            <Button theme={cta.theme} to={cta.href} key={i}>{cta.text}</Button>
          ))}
        </div>
      </div>
      <ImageDecorative data={learn_Img} />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 32px 48px;
  align-items: center;
  ul {
    margin: ${Clamp(24, 24, 32, 'px')} 0 ${Clamp(32, 32, 48, 'px')};
    li {
      display: grid;
      grid-template-columns: 25px 1fr;
      font-size: ${Clamp(16, 22, 22)};
      gap: 12px;
      &:not(:last-child){
        margin-bottom: 16px;
      }
    }
  }
  .paragraph {
    font-size: ${Clamp(24, 24, 32)};
    font-weight: 600;
  }
  @media (max-width: 1049px){
    grid-template-columns: 1fr;
    .imageDecorative {
      order: -1;
    }
  }
`

export default Learn;