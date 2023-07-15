import React, { useEffect } from "react";
import GlobalStyle from "../styles/GlobalStyle";
import Nav from "../components/organisms/Nav";
import Footer from "../components/organisms/Footer";

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
    </>
  );
}

export default Layout;