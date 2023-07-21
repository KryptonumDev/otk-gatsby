import React from "react";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";
import Markdown from "../../../utils/Markdown";
import Heading from "../../atoms/Heading";
import EbookForm from "../../organisms/EbookForm";

const Why = ({ heading, paragraph }) => {
  return (
    <Wrapper className="max-width">
      <header>
        <Heading type="h2">{heading}</Heading>
        <hr />
        <Markdown className="paragraph">{paragraph}</Markdown>
      </header>
      <EbookForm data={{ formCta: 'Zapisz się i pobierz' }} variant="dark" />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  header {
    max-width: 768px;
    h2 {
      color: var(--primary-500);
    }
    .paragraph {
      font-size: ${Clamp(16, 18, 20)};
    }
    margin-bottom: 34px;
  }
  form {
    max-width: 768px;
  }
`

export default Why;