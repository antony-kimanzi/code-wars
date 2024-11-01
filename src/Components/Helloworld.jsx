import React from "react";

function Helloworld({ content = "Hello World", properties = {} }) {
  return <h1 {...properties}>{content}</h1>;
}

export default Helloworld;
