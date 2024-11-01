import React from "react";
import CodeWarsLink from "./CodeWarsLink";

const Leaderboard = (props) => (
  <div>
    {props.leaders.map((leader) => (
      <CodeWarsLink key={leader} user={leader} />
    ))}
  </div>
);

export default Leaderboard;
