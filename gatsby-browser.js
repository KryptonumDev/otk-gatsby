import React from 'react';
import Layout from "./src/global/Layout"

export const onRouteUpdate = ({ location }) => {
  if (process.env.NODE_ENV !== 'production') {
    return null;
  }
  const pagePath = location ? location.pathname + location.search + location.hash : undefined;
  setTimeout(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', { page_path: pagePath });
    }
  }, 100);
  return true;
};

export const wrapPageElement = ({ props, element }) => {
  return <Layout {...props}>{element}</Layout>
}