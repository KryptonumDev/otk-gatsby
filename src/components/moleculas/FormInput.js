import React from "react"
import styled from "styled-components"
import { Clamp } from "../../utils/functions";

const FormInput = ({ rows, ...props }) => (
  <Wrapper>
    {rows
    ?
      <textarea {...props} />
    :
      <input {...props} />
    }
  </Wrapper>
)

const Wrapper = styled.label`
  input {
    height: 54px;
    border: 2px solid var(--neutral-100);
    padding: 16px;
    font-size: ${Clamp(16, 16, 20)};
    &::placeholder {
      color: var(--neutral-100);
    }
    width: 100%;
    border-radius: 10px;
  }
`

export default FormInput;