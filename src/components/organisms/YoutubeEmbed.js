import React from 'react';
import styled from 'styled-components';

const YoutubeEmbed = ({ id, alt, ...props }) => {
  return (
    <Wrapper className='yt-embed' {...props}>
      <iframe
        width="1280"
        height="720"
        src={`https://www.youtube.com/embed/${id}?rel=0&fs=1&disablekb=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        title={alt || 'Film z serwisu YouTube z kanału Ośrodka Zdrowia w Turośni Kościelnej'}
        loading='lazy'
      />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 0;
  iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
  }
`

export default YoutubeEmbed;