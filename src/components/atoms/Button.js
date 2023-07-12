import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Button = ({ theme, variant, children, to, className, ...props }) => {
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
            className={`${theme} ${variant}`}
            {...props}
          >
            <span>{children}</span>
          </StyledAnchor>
        ) : (
          <StyledAnchor
            as={Link}
            to={to}
            {...props}
            className={`${theme} ${variant}`}
          >
            <span>{children}</span>
          </StyledAnchor>
        )
      ) : (
        <StyledAnchor
          as='button'
          type="submit"
          {...props}
          className={`${theme} ${variant}`}
        >
          <span>{children}</span>
        </StyledAnchor>
      )}
    </>
  )
}

const StyledAnchor = styled.a`

`
 
export default Button;