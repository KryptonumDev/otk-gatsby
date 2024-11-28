import React from "react";
import styled from "styled-components";

const Loader = () => (
  <Wrapper aria-label="Ładowanie..."></Wrapper>
)

const Wrapper = styled.div`
  display: inline-block;
  width: 18px;
  height: 18px;
  border-top: 1px solid;
  border-radius: 50%;
  animation: .4s rotate infinite;
  @keyframes rotate {
    100% {
        transform: rotate(360deg);
    }
  }
`

export default Loader;
