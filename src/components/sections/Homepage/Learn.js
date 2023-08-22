import React from "react";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";
import Button from "../../atoms/Button";
import Heading from "../../atoms/Heading";
import ImageDecorative from "../../atoms/ImageDecorative";
import UnorderedList from "../../organisms/UnorderedList";

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
      <Heading type="h2" className="paragraph">{learn_Paragraph}</Heading>
       <UnorderedList data={learn_List} />
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
  }
  .paragraph {
    h2 {
      font-size: inherit;
    }
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