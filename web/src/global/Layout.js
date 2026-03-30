import React, { useEffect } from "react";
import GlobalStyle from "../styles/GlobalStyle";
import CookieConsent from "../components/organisms/CookieConsent";
import Nav from "../components/organisms/Nav";
import Footer from "../components/organisms/Footer";

const Layout = ({ children, location }) => {
  const handleTabKey = (e) => {
    (e.key === 'Tab') && document.documentElement.classList.add('tabbing')
  };
  const handleMouseDown = () => {
    document.documentElement.classList.remove('tabbing');
  };

  useEffect(() => {
    document.addEventListener('keydown', handleTabKey);
    window.addEventListener('mousedown', handleMouseDown);
    return () => {
      document.removeEventListener('keydown', handleTabKey);
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  return (
    <>
      <GlobalStyle />
      <CookieConsent />
      <Nav location={location} />
      <main id="main">
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
