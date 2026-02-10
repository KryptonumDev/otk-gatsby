import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { Clamp } from "../../utils/functions";

const Button = ({ theme = 'primary', variant = 'dark', children, to, className, ...props }) => {
  const isExternal = to && to.startsWith('https://');
  const title = props.title !== undefined ? props.title : children;

  return (
    <>
      {to ? (
        isExternal ? (
          <StyledAnchor
            as='a'
            href={to}
            target="_blank"
            rel="noreferrer"
            className={`cta ${className}`}
            data-theme={theme}
            data-variant={variant}
            title={title}
            {...props}
          >
            {children}
            <span className="sr-only"> (otwiera się w nowej karcie)</span>
          </StyledAnchor>
        ) : (
          <StyledAnchor
            as={Link}
            to={to}
            className={`cta ${className}`}
            data-theme={theme}
            data-variant={variant}
            title={title}
            {...props}
          >
            {children}
          </StyledAnchor>
        )
      ) : (
        <StyledAnchor
          as='button'
          type="submit"
          className={`cta ${className}`}
          data-theme={theme}
          data-variant={variant}
          title={title}
          {...props}
        >
          {children}
        </StyledAnchor>
      )}
    </>
  )
}

const StyledAnchor = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: ${Clamp(16, 20, 24)};
  font-weight: 600;
  padding: 19px 42px;
  @media (max-width: 349px){
    padding: 19px 24px;
  }
  &[data-theme="primary"] {
    &[data-variant="dark"] {
      background-color: var(--primary-500);
      color: var(--neutral-100);
      &:hover {
        background-color: var(--primary-400);
      }
    }
     &[data-variant="light"] {
      background-color: var(--neutral-100);
      color: var(--primary-500);
      &:hover {
        background-color: var(--neutral-200);
      }
    }
  }
  &[data-theme="secondary"] {
    &[data-variant="dark"]{
      box-shadow: inset 0 0 0 3px;
      color: var(--primary-500);
      &:hover {
        color: var(--primary-300);
        border-color: var(--primary-300);
      }
    }
     &[data-variant="light"] {
      box-shadow: inset 0 0 0 3px;
      color: var(--neutral-100);
      &:hover {
        color: var(--secondary-200);
        border-color: var(--secondary-200);
      }
    }
  }
  border-radius: 12px;
  transition: transform .3s, background-color .3s, color .3s, border-color .3s;
  transition-timing-function: var(--easing);
  &:active {
    transform: scale(.95);
  }
  &:disabled {
    pointer-events: none;
  }
`

export default Button;
