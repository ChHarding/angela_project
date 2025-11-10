import React from "react";

function RecipeCard({ recipe }) {
    const { title, image, cuisines, readyInMinutes, usedIngredients, missedIngredients, sourceUrl } = recipe;

    return (
    <div className="recipe-card">
        <img src={image} alt={title} className="recipe-img" />

        <div className="recipe-info">
        <h2>{title}</h2>

        {cuisines && cuisines.length > 0 && (
            <p className="cuisine">{cuisines.join(", ")}</p>
        )}

        <p>Ready in {readyInMinutes} minutes</p>

        {/* Used ingredients */}
        {usedIngredients && usedIngredients.length > 0 && (
            <div className="ingredient-section">
            <h4>Used Ingredients</h4>
            <ul>
                {usedIngredients.map((ing) => (
                <li key={ing.id}>{ing.name}</li>
                ))}
            </ul>
            </div>
        )}

        {/* Missing ingredients */}
        {missedIngredients && missedIngredients.length > 0 && (
            <div className="ingredient-section missed">
            <h4>Missing Ingredients</h4>
            <ul>
                {missedIngredients.map((ing) => (
                <li key={ing.id}>{ing.name}</li>
                ))}
            </ul>
            </div>
        )}

        <a href={sourceUrl} target="_blank" rel="noopener noreferrer">
            View Recipe
        </a>
        </div>
    </div>
    );
}

export default RecipeCard;
