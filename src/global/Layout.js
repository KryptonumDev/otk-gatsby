import React, { useEffect } from "react";
import GlobalStyle from "../styles/GlobalStyle";
import Nav from "../components/organisms/Nav";
import Footer from "../components/organisms/Footer";
import { Script } from "gatsby";

const Layout = ({ children }) => {
  useEffect(() => {
    document.addEventListener('keydown', function(event) {
      event.key === 'Tab' && document.documentElement.classList.add('tabbing')
    });
    window.addEventListener("mousedown", () => {
      document.documentElement.classList.remove('tabbing')
    })
  }, [])

  return (
    <>
      <GlobalStyle />
      <Nav />
      <main id="main">
        {children}
      </main>
      <Footer />
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GATSBY_GA_KEY}`}
        strategy="off-main-thread"
        forward={[`gtag`]}
      />
      <Script
        id="gtag-config"
        strategy="off-main-thread"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
          window.gtag = function gtag(){ window.dataLayer.push(arguments);}
          gtag('js', new Date()); 
          gtag('config', '${process.env.GATSBY_GA_KEY}', { send_page_view: false })`
        }}
      />
    </>
  );
}

export default Layout;