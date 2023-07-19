import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

const ImageDecorative = ({ data, loading="lazy" }) => {
  return (
    <Wrapper className="imageDecorative">
      <Shape />
      <GatsbyImage
        image={data.asset.gatsbyImageData}
        alt={data.asset.altText || ''}
        loading={loading}
        className="imageDecorativeImg"
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  margin-left: 10%;
  margin-bottom: 5%;
  width: fit-content;
  .imageDecorativeImg {
    filter: drop-shadow(8px -3px 8px rgb(14 36 40 / 3%));
  }
  .shape {
    position: absolute;
    width: 100%;
    height: 100%;
    left: -10%;
    bottom: -5%;
  }
`

const Shape = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='514'
    height='479'
    fill='none'
    viewBox='0 0 514 479'
    className="shape"
  >
    <path
      fill='#0FE3AF'
      d='M318.306 461.952c-59.231 34.189-134.969 13.9-169.166-45.317L16.876 187.6C-17.321 128.383 2.973 52.663 62.204 18.474c59.231-34.189 134.969-13.9 169.166 45.317l132.264 229.035c34.197 59.217 13.903 134.937-45.328 169.126z'
    ></path>
    <path
      fill='#3DB8ED'
      d='M149.06 292.567c-34.317 59.291-13.891 135.142 45.621 169.417 59.513 34.275 135.576 13.995 169.893-45.297l1.356-2.344c19.678-36.575 20.512-82.134-1.804-120.691L256.167 107.144 149.06 292.567z'
    ></path>
  </svg>
)

export default ImageDecorative;