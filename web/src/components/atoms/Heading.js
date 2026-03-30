import React from "react";
import Markdown from "../../utils/Markdown";

const Heading = ({ type='h1', children, ...props }) => {
  return (
    <Markdown
      components={{
        'p': type,
      }}
      {...props}
    >
      {children}
    </Markdown>
  );
}

export default Heading;