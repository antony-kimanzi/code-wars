import React from "react";

export default function Leaderboard({ leaders = [] }) {
  const myHeader =
    `My three favorite codewarriors ${leaders[0]} , ${leaders[1]} and ${leaders[2]}`;

  return (
    <div>
      <h1>{myHeader}</h1>

      {leaders.map((user) => {
        return (
          <div>
            <a key={user}
              href={`"http://www.codewars.com/users/${user}"`}
              target="_blank"
            >
              {user}
            </a>
          </div>
        );
      })}
    </div>
  );
}
