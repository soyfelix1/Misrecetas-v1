import React, { useEffect, useState } from 'react';
  import { Link } from 'react-router-dom';

  function Recetas() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
      fetch('https://soyfelixactual.duckdns.org/webhook/get_recetas_4fcbf33c-d4fd-40e6-913e-850ea27271eb')
        .then(response => response.json())
        .then(data => setRecipes(data))
        .catch(error => console.error('Error fetching recipes:', error));
    }, []);

    return (
      <div className="recipe-list">
        <h1>Recetas</h1>
        <div className="recipe-grid">
          {recipes.map(recipe => (
            <div key={recipe.ID} className="recipe-card">
              <h2>{recipe.Nombre}</h2>
              <p>{recipe.Descripción}</p>
              <p><strong>Categoría:</strong> {recipe.Categoria}</p>
              <p><strong>Tiempo de Preparación:</strong> {recipe["Tiempos Prep."]}</p>
              <p><strong>Tiempo de Cocción:</strong> {recipe["Tiempo Cocc."]}</p>
              <Link to={`/recipe/${recipe.ID}`}>View Details</Link>
            </div>
          ))}
        </div>
      </div>
    );
  }

  export default Recetas;
