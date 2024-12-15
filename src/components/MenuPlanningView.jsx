import React, { useState } from 'react';

  function MenuPlanningView() {
    const [menu, setMenu] = useState({
      Monday: [],
      Tuesday: [],
      Wednesday: [],
      Thursday: [],
      Friday: [],
      Saturday: [],
      Sunday: []
    });

    const handleAddRecipe = (day, recipe) => {
      setMenu({
        ...menu,
        [day]: [...menu[day], recipe]
      });
    };

    const handleRemoveRecipe = (day, recipeIndex) => {
      setMenu({
        ...menu,
        [day]: menu[day].filter((_, index) => index !== recipeIndex)
      });
    };

    return (
      <div className="menu-planning-view">
        <h1>Menu Planning View</h1>
        <div className="menu-planning-grid">
          {Object.keys(menu).map(day => (
            <div key={day} className="menu-day">
              <h2>{day}</h2>
              <ul>
                {menu[day].map((recipe, index) => (
                  <li key={index}>
                    {recipe.title}
                    <button onClick={() => handleRemoveRecipe(day, index)}>Remove</button>
                  </li>
                ))}
              </ul>
              <button onClick={() => handleAddRecipe(day, { title: 'Spaghetti Carbonara' })}>Add Spaghetti Carbonara</button>
              <button onClick={() => handleAddRecipe(day, { title: 'Chicken Curry' })}>Add Chicken Curry</button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  export default MenuPlanningView;
