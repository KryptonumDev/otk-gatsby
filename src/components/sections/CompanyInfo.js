import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import Heading from "../atoms/Heading";

const CompanyInfo = () => {
  const { global: { info } } = useStaticQuery(graphql`
    query {
      global: sanityGlobal {
        info {
          heading
          subheading
          list
          map {
            lat
            lng
            alt
          }
        }
      }
    }
  `)

  return (
    <Wrapper>
      <Heading>{info.heading}</Heading>
      <hr />
      <ReactMarkdown className="subheading">{info.subheading}</ReactMarkdown>
      <ul>
        {info.list.map((item, i) => (
          <li key={i}>
            <ReactMarkdown>{item}</ReactMarkdown>
          </li>
        ))}
      </ul>
      <iframe
        src={`https://maps.google.com/maps?q=${info.map.lat},${info.map.lng}&z=${info.map.alt}&ie=UTF8&iwloc=&output=embed`}
        width='100%'
        height='600'
        loading="lazy"
        style={{border: 0}}
      ></iframe>
    </Wrapper>
  );
}

const Wrapper = styled.section`

`

export default CompanyInfo;