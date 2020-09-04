import React from 'react';

function Fruit({ name, picture}) {
  return <div>
      <h2>I like {name}</h2>
      <img src = {picture}></img>
  </div>
}

const fruitILike = [{
  name: "apple",
  image: "https://i5.walmartimages.ca/images/Large/094/514/6000200094514.jpg"
},
 
  {
  name: "melon",
  image: "https://sc02.alicdn.com/kf/UTB83so5mnzIXKJkSafVq6yWgXXaf.jpg"
}];

function App() {
  return <div>
      {fruitILike.map(dish => <Fruit name={dish.name} picture={dish.image}/>
      )}
  </div>;

}

export default App;
