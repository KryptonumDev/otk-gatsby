import React from 'react';
import styled from 'styled-components';

export default function Switch({ inputProps, ...props }) {
  return (
    <SwitchWrapper {...props}>
      <input type="checkbox" {...inputProps} />
      <div className="dot">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        >
          <path d="m5 11.355 1.338 1.435c.739.791 1.108 1.187 1.521 1.312.364.11.75.08 1.096-.084.394-.186.71-.634 1.343-1.53L15 5.833" />
        </svg>
      </div>
    </SwitchWrapper>
  );
}

const SwitchWrapper = styled.label`
  input {
    position: absolute;
    opacity: 0;
  }
  &:has(input:disabled) {
    opacity: 0.62;
  }
  cursor: pointer;
  width: 56px;
  height: 32px;
  margin: 6px 0;
  border-radius: 42px;
  border: 1px solid var(--primary-500);
  background-color: var(--neutral-100, #fff);
  transition: background-color 300ms ease-out;
  &:hover {
    background-color: rgba(0, 37, 156, 0.13);
  }
  &:has(input:focus-visible) {
    outline: 2px solid var(--primary-800, #01403b);
    outline-offset: 3px;
  }
  &:has(input:checked) {
    background-color: var(--primary-500);
    .dot {
      transform: translateX(24px);
      background-color: rgba(255, 255, 255, 0.5);
      svg {
        stroke-dashoffset: 0;
      }
    }
  }
  .dot {
    margin: 4px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: rgba(0, 37, 156, 0.5);
    transition:
      transform 500ms var(--easing),
      background-color 300ms ease-out;
    display: grid;
    place-items: center;
    svg {
      stroke-dasharray: 16;
      stroke-dashoffset: 16;
      transition: stroke-dashoffset 500ms var(--easing);
    }
  }
`;
