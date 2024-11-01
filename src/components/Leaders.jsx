import React from 'react'
import CodewarsLink from './CodewarsLink';



const App=()=>{
    
    const myHeader=<h1>My three favorite codewarriors are noLan, jhoffner and OverZealous</h1>


const leaders=["noLan","jhoffner","OverZealous","Betty","Camilla"];
const createCodewarsLink =(leader) => {


  return (
    
   <div className={leader}>
    <a
     target='_blank'
     rel="noreferrer"
     key={leader}
     href={`http://www.codewars.com/users/${leader}`}>
        {leader}
    </a> 
    </div>);
};

    return (
        <div>
          {myHeader}
          {CodewarsLink}
          <div>
            {leaders.map((leader) => createCodewarsLink(leader))}
          </div>
        </div>
      );
    };
    
    
    export default App;

