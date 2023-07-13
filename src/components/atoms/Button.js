import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { Clamp } from "../../utils/functions";

const Button = ({ theme, variant='dark', children, to, className, ...props }) => {
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
            className={`cta ${theme} ${variant} ${className}`}
            {...props}
          >
            <span>{children}</span>
          </StyledAnchor>
        ) : (
          <StyledAnchor
            as={Link}
            to={to}
            {...props}
            className={`cta ${theme} ${variant} ${className}`}
          >
            <span>{children}</span>
          </StyledAnchor>
        )
      ) : (
        <StyledAnchor
          as='button'
          type="submit"
          {...props}
          className={`cta ${theme} ${variant} ${className}`}
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
  @media (max-width: 499px){
    width: 100%;
    text-align: center;
  }
  font-weight: 600;
  &.primary {
    padding: 19px 42px;
    &.dark {
      background-color: var(--primary-500);
      color: var(--neutral-100);
    }
    &.light {
      background-color: #fff;
      color: var(--primary-500);
      &:hover {
        background-color: #fafafa;
      }
    }
  }
  &.secondary {
    padding: 17px 42px;
    border: 2px solid var(--neutral-100);
    color: var(--neutral-100);
    &:hover {
      background-color: #fafafa;
      color: var(--primary-500);
    }
    
  }
  border-radius: 12px;
  transition: transform .3s, background-color .3s, color .3s;
  &:active {
    transform: scale(.95);
  }
`
 
export default Button;