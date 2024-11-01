import "./App.css";
import React from "react";
import Leaderboard from "./components/Leaderboard"
import CodewarsLink from "./components/CodewarsLink";

function App() {
  const createElement = (content, tag = "div", props = {}) => {
    return React.createElement(tag, props, content);
  };

  const createUnorderedList = (list) => {
    return React.createElement(
      "ul",
      null,
      list.map((listItem) => {
        return React.createElement("li", { key: listItem }, listItem);
      })
    );
  };

  const leaders = ["Oliver", "Amelia", "Liam", "Sophia", "Ethan", "Ava", "Mason", "Isabella", "Lucas", "Blake"]
  const username = "Antony";

  return (
    <div className="App">
      {createElement("Grocery List",)}
      {createUnorderedList(["apples", "oranges", "bananas"])}
      <Leaderboard leaders={leaders}/>
      <CodewarsLink user={username}/>
    </div>
  );
}

export default App;
