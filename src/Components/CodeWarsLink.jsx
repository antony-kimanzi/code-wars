import React from "react";

const CodeWarsLink = (props) => (
  <a
    href={`http://www.codewars.com/users/${props.user}`}
    target="_blank"
    rel="noopener noreferrer"
  >
    {props.user}
  </a>
);
export default CodeWarsLink;
