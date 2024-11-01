import React from "react";
import "../App.css";

function CodewarsLink({ user }) {
  return (
    <div className="codewarslink">
      <p>
        This is the Codewarrior profile for 
        <a
          target="_blank"
          rel="noreferrer"
          key={user}
          href={`http://www.codewars.com/users/${user}`}
        >
          {user}
        </a>
      </p>
    </div>
  );
}

export default CodewarsLink;
