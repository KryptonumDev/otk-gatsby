import React from "react";
import ReactMarkdown from "react-markdown";

const Heading = ({ type='h1', children, ...props }) => {
  return (
    <ReactMarkdown
      components={{
        'p': type,
      }}
      {...props}
    >
      {children}
    </ReactMarkdown>
  );
}

export default Heading;