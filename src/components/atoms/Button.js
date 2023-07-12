import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { Clamp } from "../../utils/functions";

const Button = ({ theme, variant='', children, to, ...props }) => {
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
            {...props}
            className={`cta ${theme} ${variant}`}
          >
            <span>{children}</span>
          </StyledAnchor>
        )
      ) : (
        <StyledAnchor
          as='button'
          type="submit"
          {...props}
          className={`cta ${theme} ${variant}`}
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
  border-radius: 12px;
  background-color: #fff;
  color: #00259C;
  padding: 21px 48px;
  transition: transform .3s, background-color .3s;
  &:hover {
    background-color: #fafafa;
  }
  &:active {
    transform: scale(.95);
  }

`
 
export default Button;