import React from 'react'
import CodewarsLink from './codewarslink'
const Leaderboard = ({ leaders }) => {
    return (
      <div>
        {leaders.map((leader) => (
          <CodewarsLink key={leader} user={leader} />
        ))}
      </div>
    );
  };
  export default Leaderboard;