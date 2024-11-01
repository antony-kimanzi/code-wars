import React from 'react';
import Leaderboard from './components/leaderboard';
import groceries from './components/groceries';
import './App.css';
function createElement(content, tag = 'div', props = {}) {
  return React.createElement(tag, props, content);
}
function createUnorderedList(items) {
  const listItems = items.map((item, index) => (
    React.createElement('li', { key: index }, item)
  ));
  return React.createElement('ul', null, ...listItems);
} 
const leaders = ['Alice', 'Grace', 'Karen', 'John', 'Doe'];


const App = () => (
  <div>
    {createElement("Grocery List",)}
    {createUnorderedList(['apples', 'oranges', 'bananas'])}
    <Leaderboard leaders={leaders} />
    <groceries />
  </div>
);
export default App;