import React from "react";
import styled from "styled-components";
import { Error } from "../atoms/Icons";

const FormError = ({ error, errorText = 'To pole jest wymagane' }) => {
  return (
    <Wrapper>
      {error && (
        <>
          <Error />
          <span>{errorText}</span>
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.p`
  display: flex;
  align-items: center;
  color: var(--error);
  gap: 8px;
  margin-top: 5px;
  max-height: 40px;
  transition: max-height .4s;
  &:empty {
    max-height: 0;
  }
`

export default FormError;