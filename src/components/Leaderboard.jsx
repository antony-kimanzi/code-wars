import React from "react";
import "../App.css";

export default function Leaderboard(props) {
  const myHeader = (
    <h1>
      My three favorite codewarriors are {props.leaders[0]}, {props.leaders[1]},{" "}
      {props.leaders[2]}.
    </h1>
  );
  const users = props.leaders;
  const codewarsLink = users.map((user) => {
    return (
      <a
        target="_blank"
        rel="noreferrer"
        key={user}
        href={`http://www.codewars.com/users/${user}`}
      >
        {user}
      </a>
    );
  });

  return (
    <div className="leaderboard">
      {myHeader}
      {codewarsLink}
    </div>
  );
}
