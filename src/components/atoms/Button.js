import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { Clamp } from "../../utils/functions";

const Button = ({ theme, variant='dark', children, to, ...props }) => {
  const isExternal = to && to.startsWith('https://');
  return (
    <>
      {to ? (
        isExternal ? (
          <StyledAnchor
            as='a'
            href={to}
            target="_blank"
            rel="noreferrer"
            className={`cta ${theme} ${variant}`}
            {...props}
          >
            <span>{children}</span>
          </StyledAnchor>
        ) : (
          <StyledAnchor
            as={Link}
            to={to}
            className={`cta ${theme} ${variant}`}
            {...props}
          >
            <span>{children}</span>
          </StyledAnchor>
        )
      ) : (
        <StyledAnchor
          as='button'
          type="submit"
          className={`cta ${theme} ${variant}`}
          {...props}
        >
          <span>{children}</span>
        </StyledAnchor>
      )}
    </>
  )
}

const StyledAnchor = styled.a`
  display: inline-block;
  font-size: ${Clamp(16, 20, 24)};
  font-weight: 600;
  &.primary {
    padding: 19px 42px;
    &.dark {
      background-color: var(--primary-500);
      color: var(--neutral-100);
      &:hover {
        background-color: var(--primary-400);
      }
    }
    &.light {
      background-color: var(--neutral-100);
      color: var(--primary-500);
      &:hover {
        background-color: var(--neutral-200);
      }
    }
  }
  &.secondary {
    padding: 16px 42px;
    &.dark {
      border: 3px solid var(--primary-500);
      color: var(--primary-500);
      &:hover {
        color: var(--primary-300);
        border-color: var(--primary-300);
      }
    }
    &.light {
      border: 3px solid var(--neutral-100);
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
`
 
export default Button;