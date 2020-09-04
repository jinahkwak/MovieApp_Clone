import React from 'react';

function Fruit({ favourite }) {
  return <h3>I like { favourite }</h3>;
}

function App() {
  return <div>Hello!!
      <Fruit favourite="apple" />
      <Fruit favourite="melon" />
      <Fruit favourite="grape" />
      <Fruit favourite="strawberry" />
  </div>;

}

export default App;
