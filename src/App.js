import React from 'react';
import './App.css';
import Leaderboard from './component/Leaderboard';

function App() {

function createElement(content,tag="div",property ) {
  return React.createElement(tag,property,content)
}

function createUnorderedList(list){
  return React.createElement("ul",null,list.map((item) => React.createElement("li",{key:item},item)
))
}
 const leaders = [
  "jhoffner",
  "GiacomoSorbi",
  "ZozoFouchtra",
  "myjinxin2015",
  "g964",
  "donaldsebleung",
  "Blind4Basics",
];
  return (
    <div className="App">
      {createElement("Fruits")}
      {createUnorderedList(["apples","oranges","bananas"])}
      <Leaderboard leaders = {leaders}/>
  
    </div>
  );
}

export default App;


