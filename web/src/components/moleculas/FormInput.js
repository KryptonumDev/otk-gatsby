import React from "react"
import styled from "styled-components"
import { Clamp } from "../../utils/functions";
import FormError from "./FormError";

const FormInput = ({ register, error=null, errors, textarea=false, ...props }) => (
  <Wrapper className={`formItem ${textarea ? 'formItem-textarea' : ''}`}>
    <label>
      {textarea ? (
        <textarea name={register.name} {...props} {...register} aria-invalid={errors[register.name] ? true : false}></textarea>
      ) : (
        <input name={register.name} {...props} {...register} aria-invalid={errors[register.name] ? true : false} />
      )}
    </label>
    <FormError error={error} isError={errors[register.name]} />
  </Wrapper>
)

const Wrapper = styled.div`
  input,
  textarea {
    border: 1px solid var(--form-input);
    padding: 16px;
    font-size: ${Clamp(16, 16, 20)};
    width: 100%;
    &::placeholder {
      color: var(--form-input);
    }
    border-radius: 10px;
    &[aria-invalid="true"] {
      border-color: var(--error);
    }
  }
  input {
    height: 64px;
  }
  textarea {
    resize: none;
    height: 233px;
  }
`

export default FormInput;