import React from "react"
import styled from "styled-components"
import FormError from "./FormError";
import { Clamp } from "../../utils/functions";

const Select = ({ label, options, register, error = null, errors, ...props }) => (
  <SelectWrapper className='formItem-select'>
    <p className="label">{label}</p>
    <select name="center" {...register} {...props} aria-invalid={!!errors[register.name]}>
      <option value="" disabled selected>{label}</option>
      {options.map((option, index) => (
        <option key={index} value={option}>{option}</option>
      ))}
    </select>
    <FormError error={error} isError={errors[register.name]} />
  </SelectWrapper>
)

const SelectWrapper = styled.label`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.25rem 1rem;
  .label {
    font-size: ${Clamp(16, 16, 20)};
  }
  select {
    cursor: pointer;
    width: 100%;
    flex-basis: fit-content;
    flex-grow: 1;
    max-width: 100%;
    min-width: 21rem;
    border: 1px solid var(--form-input);
    padding: 1rem;
    padding-right: 2.8125rem;
    font-size: ${Clamp(16, 16, 20)};
    background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSI4IiBmaWxsPSJub25lIiB2aWV3Qm94PSIwIDAgMTMgOCI+PHBhdGggc3Ryb2tlPSIjMDE1MkE4IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0ibTEuNDggMS4wMjYgNS4yNSA1LjI1IDUuMjUtNS4yNSIvPjwvc3ZnPg==") no-repeat right 1rem center / 0.8125rem;
    &::placeholder {
      color: var(--form-input);
    }
    border-radius: 10px;
    &[aria-invalid="true"] {
      border-color: var(--error);
    }
  }
  .error {
    width: 100%;
  }
`

export default Select;
