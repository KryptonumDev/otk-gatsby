import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";
import Heading from "../../atoms/Heading";
import ImageDecorative from "../../atoms/ImageDecorative";

const Staff = ({ data }) => {
  return (
    <Wrapper className="max-width">
      {data.nodes.map((person, i) => (
        <div className="person" key={i}>
          <div className="copy">
            <Heading type="h2">{person.name}</Heading>
            <ReactMarkdown className="bio">{person.bio}</ReactMarkdown>
          </div>
          <ImageDecorative data={person.img} />
        </div>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .person {
    &:not(:last-child){
      margin-bottom: ${Clamp(64, 64, 98)};
    }
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
    gap: ${Clamp(24, 32, 48)} ${Clamp(82, 82, 144)};
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
`

export default Staff;