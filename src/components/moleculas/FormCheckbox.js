import React from "react"
import styled from "styled-components"
import { Clamp } from "../../utils/functions";
import FormError from "./FormError";

const FormCheckbox = ({ text, register, errors, ...props }) => (
  <Wrapper className="formItem">
    <label>
      <div className="tick">
        <input name={register.name} type="checkbox" {...props} {...register} />
        <Check />
      </div>
      <p>{text}</p>
    </label>
    <FormError error={errors[register.name]} />
  </Wrapper>
)

const Wrapper = styled.div`
  label {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 8px;
    .tick {
      position: relative;
      color: var(--primary-500);
      input {
        display: block;
        width: 32px;
        height: 32px;
        border-radius: 5px;
        border: 2px solid var(--neutral-100);
        cursor: pointer;
        transition: background-color .3s;
        &:checked {
          background-color: var(--neutral-100);
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
    p {
      margin-top: .2em;
      font-size: ${Clamp(16, 16, 20)};
      a {
        color: var(--secondary-500);
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