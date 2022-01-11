import { useState, useEffect } from 'react';
import './App.css';
import RecipeViewer from '../RecipeViewer';

function App() {
  const [randomNumber, setrandomNumber] = useState(1);

  function handleClick(){
      const number = Math.floor(Math.random()* 20 + 1)
      console.log(number)
      setrandomNumber(number)
      
  }

  return (
    <div className="App">
      <button className = "beef" onClick= {handleClick}> Get a Beef recipe </button>
      <button className = "vegetarian" onClick= {handleClick}> Get a Vegetarian  recipe</button>
      <button className= "randomRecipe" onClick= {handleClick} > Get a Chicken recipe </button>
     <RecipeViewer randomNumber ={randomNumber} />
    </div>
  );
}

export default App;
