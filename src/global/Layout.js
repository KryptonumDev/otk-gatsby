import React from "react";
import GlobalStyle from "../styles/GlobalStyle";
import Nav from "../components/organisms/Nav";
import Footer from "../components/organisms/Footer";

const Layout = ({ children }) => {
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