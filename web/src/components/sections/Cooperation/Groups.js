import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { Clamp } from "../../../utils/functions";
import Markdown from "../../../utils/Markdown";
import Heading from "../../atoms/Heading";

const Groups = ({ groups }) => {
  return (
    <Wrapper>
      {groups.map((group, i) => {
        const asset = group.img?.asset;
        const isSvg = asset?.url?.endsWith('.svg');
        const hasImage = !!(asset?.gatsbyImageData || (isSvg && asset?.url));
        const isEven = i % 2 === 0;

        return (
          <div className={`group ${isEven ? 'tinted' : ''}`} key={i}>
            <div className="group-inner max-width">
              <div className="watermark" aria-hidden="true">0{i + 1}</div>
              <div className="card">
                {hasImage && (
                  <div className="icon-col">
                    <div className="icon-circle">
                      {isSvg ? (
                        <img
                          src={asset.url}
                          alt={asset.altText || ''}
                          loading="lazy"
                        />
                      ) : asset?.gatsbyImageData ? (
                        <GatsbyImage
                          image={asset.gatsbyImageData}
                          alt={asset.altText || ''}
                          objectFit="contain"
                        />
                      ) : null}
                    </div>
                  </div>
                )}
                <div className="content-col">
                  <Heading type="h2" className="heading">{group.heading}</Heading>
                  <Markdown className="content">{group.content}</Markdown>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .group {
    padding: ${Clamp(48, 64, 82, 'px')} 0;
    position: relative;
    overflow: hidden;

    &.tinted {
      background-color: color-mix(in srgb, var(--primary-500) 4%, var(--neutral-100));
    }
  }

  .group-inner {
    position: relative;
  }

  .watermark {
    position: absolute;
    right: -2%;
    top: 50%;
    transform: translateY(-50%);
    font-size: clamp(140px, 18vw, 260px);
    font-weight: 800;
    color: var(--primary-500);
    opacity: 0.04;
    line-height: 1;
    pointer-events: none;
    user-select: none;
  }

  .card {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: ${Clamp(32, 42, 64, 'px')};
    align-items: center;
    position: relative;
    z-index: 1;
  }

  .icon-col {
    .icon-circle {
      width: ${Clamp(100, 120, 150, 'px')};
      height: ${Clamp(100, 120, 150, 'px')};
      border-radius: 50%;
      background: linear-gradient(135deg, rgba(15, 227, 175, 0.15), rgba(0, 37, 156, 0.1));
      display: flex;
      align-items: center;
      justify-content: center;
      padding: ${Clamp(20, 28, 36, 'px')};

      img,
      .gatsby-image-wrapper {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }

  .content-col {
    max-width: 700px;
  }

  .heading h2 {
    color: var(--primary-500);
    font-size: ${Clamp(24, 28, 34)};
    margin-bottom: ${Clamp(16, 20, 24, 'px')};
  }

  .content {
    font-size: ${Clamp(16, 16, 18)};
    line-height: 1.8;
    color: var(--dark-500);
    .unorderedList,
    .orderedList {
      margin: ${Clamp(8, 12, 16, 'px')} 0;
      padding-left: 0;
      list-style: none;
      li {
        position: relative;
        padding-left: 24px;
        &::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.25em;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: var(--secondary-500);
          opacity: 0.7;
        }
        &:not(:last-child) {
          margin-bottom: 8px;
        }
      }
    }
    p:not(:last-child) {
      margin-bottom: 12px;
    }
  }

  @media (max-width: 699px) {
    .card {
      grid-template-columns: 1fr;
      text-align: center;
    }
    .icon-col {
      display: flex;
      justify-content: center;
      .icon-circle {
        width: ${Clamp(80, 100, 120, 'px')};
        height: ${Clamp(80, 100, 120, 'px')};
        padding: ${Clamp(16, 20, 28, 'px')};
      }
    }
    .content {
      text-align: left;
    }
    .content-col {
      max-width: 100%;
    }
    .watermark {
      font-size: 120px;
      right: -5%;
    }
  }
`;

export default Groups;
