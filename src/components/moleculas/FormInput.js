import React from "react"
import styled from "styled-components"
import { Clamp } from "../../utils/functions";
import FormError from "./FormError";

const FormInput = ({ register, errors, ...props }) => (
  <Wrapper className='formItem'>
    <label>
      <input name={register.name} {...props} {...register} className={errors[register.name] ? 'error' : ''} />
    </label>
    <FormError error={errors[register.name]} />
  </Wrapper>
)

const Wrapper = styled.div`
  input {
    height: 54px;
    border: 2px solid var(--form-input);
    padding: 16px;
    font-size: ${Clamp(16, 16, 20)};
    &::placeholder {
      color: var(--form-input);
    }
    width: 100%;
    border-radius: 10px;
    &.error {
      border-color: var(--error);
    }
  }
`

export default FormInput;