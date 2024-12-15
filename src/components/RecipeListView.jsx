import React from 'react';
  import { Link } from 'react-router-dom';

  const recipes = [
    { id: 1, title: 'Spaghetti Carbonara', description: 'A classic Italian pasta dish.', thumbnail: 'path/to/thumbnail1.jpg' },
    { id: 2, title: 'Chicken Curry', description: 'A flavorful Indian curry.', thumbnail: 'path/to/thumbnail2.jpg' },
    // Add more recipes as needed
  ];

  function RecipeListView() {
    return (
      <div className="recipe-list">
        <h1>Recipe List</h1>
        <div className="recipe-grid">
          {recipes.map(recipe => (
            <div key={recipe.id} className="recipe-card">
              <img src={recipe.thumbnail} alt={recipe.title} />
              <h2>{recipe.title}</h2>
              <p>{recipe.description}</p>
              <Link to={`/recipe/${recipe.id}`}>View Details</Link>
            </div>
          ))}
        </div>
      </div>
    );
  }

  export default RecipeListView;
