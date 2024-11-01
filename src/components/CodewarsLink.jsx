import React from 'react'
import '../App.css'; 


function CodewarsLink({leader}){
    return (
        <div className='codewarslink'>
            <p>
             This is the Codewarrior profile for{" "}
             <a
             target='_blank'
             rel="noreferrer"
             key={leader}
          href={`http://www.codewars.com/users/${leader}`}
        >
          {leader}

             </a>
            </p>
          
        </div>
      )
}

export default  CodewarsLink;
  