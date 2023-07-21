import React from "react";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";
import Markdown from "../../../utils/Markdown";
import Button from "../../atoms/Button";
import Heading from "../../atoms/Heading";
import ImageDecorative from "../../atoms/ImageDecorative";

const Staff = ({ data, cta }) => {
  return (
    <Wrapper className="max-width">
      {data.nodes.map((person, i) => (
        <div className="person" key={i}>
          <div className="copy">
            <Heading type="h2">{person.name}</Heading>
            <Markdown className="bio">{person.bio}</Markdown>
          </div>
          <ImageDecorative data={person.img} />
        </div>
      ))}
      <div className="cta-wrapper">
        {cta.map((cta, i) => (
          <Button theme={cta.theme} to={cta.href} key={i}>{cta.text}</Button>
        ))}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .person {
    margin-bottom: ${Clamp(64, 64, 98, 'px')};
    .imageDecorative {
      max-width: 700px;
      order: -1;
    }
    display: grid;
    @media (min-width: 950px){
      grid-template-columns: 1fr 1fr;
      &:nth-child(even){
        .imageDecorative {
          order: 1;
        }
      }
    }
    align-items: start;
    gap: ${Clamp(24, 24, 32, 'px')} ${Clamp(82, 82, 144, 'px')};
    h2 {
      margin-bottom: ${Clamp(24, 32, 48, 'px')};
    }
    .bio {
      font-size: ${Clamp(16, 18, 20)};
      p:not(:last-child){
        margin-bottom: 16px;
      }
    }
  }
  .cta-wrapper {
    width: 100%;
    justify-content: center;
  }
`

export default Staff;