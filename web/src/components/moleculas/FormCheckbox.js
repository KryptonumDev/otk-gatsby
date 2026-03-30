import React from "react"
import styled from "styled-components"
import { Clamp } from "../../utils/functions";
import FormError from "./FormError";

const FormCheckbox = ({ text, register, errors, ...props }) => (
  <Wrapper className="formItem formItem-legal">
    <label>
      <span className="tick">
        <input name={register.name} type="checkbox" aria-invalid={errors[register.name] ? true : false} {...props} {...register} />
        <Check />
      </span>
      <span className="text">{text}</span>
    </label>
    <FormError isError={errors[register.name]} />
  </Wrapper>
)

const Wrapper = styled.div`
  label {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 8px;
    cursor: pointer;
    .tick {
      position: relative;
      color: var(--form-tick);
      input {
        display: block;
        width: 32px;
        height: 32px;
        border-radius: 5px;
        border: 1px solid var(--form-input);
        &[aria-invalid="true"]{
          border-color: var(--error);
        }
        transition: background-color .3s;
        &:checked {
          background-color: var(--form-input);
          & + svg {
            transform: translate(-50%, -50%) scale(1);
          }
        }
      }
      svg {
        pointer-events: none;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform .3s var(--easing);
      }
    }
    span.text {
      margin-top: .1em;
      font-size: ${Clamp(16, 16, 20)};
      a {
        color: var(--form-link);
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`

const Check = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='17'
    height='14'
    fill='none'
    viewBox='0 0 17 14'
  >
    <path
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      d='M1 6.538L6.22 13l9.692-12'
    ></path>
  </svg>
)

export default FormCheckbox;