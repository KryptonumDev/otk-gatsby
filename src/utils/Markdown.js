import React from "react";
import { Link } from "gatsby";
import ReactMarkdown from "react-markdown";

const LinkRenderer = ({ href, children }) => {
  const isExternal = href && href.startsWith('https://');
  return (
    isExternal ? (
      <a href={href} target="_blank" rel="noopener noreferrer" className="link">
        {children}
      </a>
    ) : (
      <Link to={href} className="link">{children}</Link>
    )
  );
};

const Markdown = ({ children, components, ...props }) => {
  return (
    <ReactMarkdown
      components={{
        a: LinkRenderer,
        ...components
      }}
      {...props}
    >
      {children}
    </ReactMarkdown>
  );
}
 
export default Markdown;