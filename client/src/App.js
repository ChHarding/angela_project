import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [ingredients, setIngredients] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [cuisine, setCuisine] = useState(''); 

  const cuisineOptions = [
        "African", "American", "British", "Cajun", "Caribbean", "Chinese",
        "Eastern European", "European", "French", "German", "Greek", "Indian",
        "Irish", "Italian", "Japanese", "Jewish", "Korean", "Latin American",
        "Mediterranean", "Mexican", "Middle Eastern", "Nordic", "Southern",
        "Spanish", "Thai", "Vietnamese"
    ]

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5001/api/recipes?ingredients=${ingredients}&cuisine=${cuisine}`
      );
      setRecipes(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Leftover Recipe Finder</h1>

      <input
        type="text"
        value={ingredients}
        onChange={e => setIngredients(e.target.value)}
        placeholder="Enter ingredients, comma-separated"
      />

      <select value={cuisine} onChange={e => setCuisine(e.target.value)}>
        <option value="">Any cuisine</option>
        {cuisineOptions.map((c, index) => (
        <option key={index} value={c}>{c}</option>
        ))}
      </select>



      <button onClick={handleSearch}>Search</button>

      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}>
            <h3>{recipe.title}</h3>
            <img src={recipe.image} alt={recipe.title} width={100} />

            <p><strong>Used Ingredients:</strong></p>
      <ul>
        {recipe.usedIngredients?.map(ing => (
          <li key={ing.id}>{ing.name}</li>
        ))}
      </ul>

      <p><strong>Missing Ingredients:</strong></p>
      <ul>
        {recipe.missedIngredients?.map(ing => (
          <li key={ing.id}>{ing.name}</li>
        ))}
      </ul>
      
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
