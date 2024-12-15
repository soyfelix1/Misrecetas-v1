import React, { useEffect, useState } from 'react';
  import { useParams, Link } from 'react-router-dom';

  function RecipeDetailView() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
      fetch(`https://soyfelixactual.duckdns.org/webhook/get_recetas_4fcbf33c-d4fd-40e6-913e-850ea27271eb?ID=${id}`)
        .then(response => response.json())
        .then(data => setRecipe(data[0]))
        .catch(error => console.error('Error fetching recipe details:', error));
    }, [id]);

    if (!recipe) {
      return <div>Loading...</div>;
    }

    return (
      <div className="recipe-detail">
        <h1>{recipe.Nombre}</h1>
        <p>{recipe.Descripción}</p>
        <p><strong>Categoría:</strong> {recipe.Categoría}</p>
        <p><strong>Tiempo de Preparación:</strong> {recipe["Tiempos Prep."]}</p>
        <p><strong>Tiempo de Cocción:</strong> {recipe["Tiempo Cocc."]}</p>
        <h2>Ingredientes</h2>
        <ul>
          {recipe.Ingredientes.map(ingredient => (
            <li key={ingredient.ID}>
              {ingredient.nombre} - {ingredient.cantidad} {ingredient.unidad}
            </li>
          ))}
        </ul>
        <h2>Instrucciones</h2>
        <p>{recipe.Instrucciones}</p>
        <Link to="/recetas">Back to Recetas</Link>
      </div>
    );
  }

  export default RecipeDetailView;
