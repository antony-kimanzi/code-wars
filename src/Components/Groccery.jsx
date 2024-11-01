import React from "react";

function Groccery({ fruits = ["apples", "oranges", "bananas"] }) {
  return (
    <div>
      <h2> My Fruits List</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={`item-${index}`}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}
export default Groccery;
