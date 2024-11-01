import './App.css';
import React from 'react';
import Leaders from './components/Leaders';
import CodewarsLink from './components/CodewarsLink'

// creating element function
function createElement(content, tag='div',props={}){
  return React.createElement (tag, props, content);
}
// creating unorderdList function
function createUnorderedList(list){
  return React.createElement ('ul', null,
         list.map((item,index)=>
        React.createElement('li',{key:index},item))
  );
}

function App() {
const fruitsArray=['apples','oranges','bananas']
const fruitsList=createUnorderedList(fruitsArray);
const leaders = ['noLan', 'jhoffner', 'OverZealous', 'Betty', 'Camilla'];

return (
  <div className="App">
    <h1>FRUITS</h1>
    <div>{fruitsList}</div>
    
    <div>
    <h1>My three favorite codewarriors are noLan, jhoffner, and OverZealous</h1>
        {leaders.map((leader) => (
          <CodewarsLink key={leader} leader={leader} />
        ))}
      </div>
      
    </div>
  );
}

export default App;
     