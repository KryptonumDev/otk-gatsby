import React from 'react';
import Layout from "./src/global/Layout"

export const wrapPageElement = ({ props, element }) => {
  return <Layout {...props}>{element}</Layout>
}