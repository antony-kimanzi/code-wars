import React from "react";
import Helloworld from "./Components/Helloworld";
import Groccery from "./Components/Groccery";
import MyHeader from "./Components/MyHeader";
import Leaderboard from "./Components/LeaderBoard";
import "./App.css";

function App() {
  const leaders = [
    "Sch3lp",
    "nplus",
    "jhoffner",
    "GiacomoSorbi",
    "ZozoFouchtra",
  ];

  return (
    <>
      <div>
        <Helloworld />
        <Groccery />
      </div>

      <div>
        <MyHeader />
        <Leaderboard leaders={leaders} />
      </div>
    </>
  );
}

export default App;
