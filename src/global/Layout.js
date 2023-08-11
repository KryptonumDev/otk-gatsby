import React, { useEffect } from "react";
import GlobalStyle from "../styles/GlobalStyle";
import Nav from "../components/organisms/Nav";
import Footer from "../components/organisms/Footer";
import { Script } from "gatsby";

const Layout = ({ children }) => {
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
      <Nav />
      <main id="main">
        {children}
      </main>
      <Footer />
      <Script
        key="lekarzebezkolejki-script"
        dangerouslySetInnerHTML={{
          __html: `
            !function(doc,id){if(!doc.getElementById(id)){var scr,pscr=doc.getElementsByTagName("script")[0];scr=doc.createElement("script");scr.id=id;scr.type='text/javascript';scr.src="https://lekarzebezkolejki.pl/ron-www/resources/javascript/widgets/LBKWidgets.js";pscr.parentNode.insertBefore(scr, pscr);}}(document,"osoz-widget-script");
          `,
        }}
      />,
    </>
  );
}

export default Layout;