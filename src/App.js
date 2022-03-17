import React from 'react';
import './App.css';
import {useState, useEffect} from 'react';
import ShowRecipe from './ShowRecipe';
import image from './fone.jpg';


function App() {

const My_Id = "e8e86fcd";
const My_Key = "c4090e7f85e66df30925e8a0a8b90a0f";

const [mySearch, setMySearch] = useState ('');
const [myRecipe, setMyRecipe] = useState ([]);
const [wordSubmit, setWordSubmit] = useState ('tomato');

useEffect(async() =>{
  const oneEffect = await fetch (`https://api.edamam.com/search?q=${wordSubmit}&app_id=${My_Id}&app_key=${My_Key}`);
  const twoEffect = await oneEffect.json();
  console.log(twoEffect);
  setMyRecipe(twoEffect.hits);
}, [wordSubmit])

const myRecipeSearch = (e) =>{
  console.log(e.target.value);
  setMySearch(e.target.value)
}

const finalSearch = (e) =>{
  e.preventDefault();
  setWordSubmit(mySearch)
}

  return (
    <div className="App">
      <div className="container">
        <img src={image} alt="food" width="950px"/>
        </div>
        <div className="container">
          <form onSubmit={finalSearch}>
            <input className="search" plasholder="Search..." onChange={myRecipeSearch} value={mySearch}></input>
          </form>
        </div>
        <div className="container">
        <button>Search</button>
        </div>

        <div>
        {myRecipe.map (element=>(
          <ShowRecipe
          label={element.recipe.label}
          //picture={element.recipe.image}
          type={element.recipe.mealType}
          ingredients={element.recipe.ingredientLines}

          />
        ))}
        </div>
    </div>
  );
}

export default App;
