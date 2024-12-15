import React, { useState } from 'react';
  import Calendar from './Calendar';

  function CalendarView() {
    const [selectedDate, setSelectedDate] = useState(null);
    const [plannedRecipes, setPlannedRecipes] = useState({});

    const handleDateClick = (date) => {
      setSelectedDate(date);
    };

    const handleAddRecipe = (recipe) => {
      setPlannedRecipes({
        ...plannedRecipes,
        [selectedDate.toISOString().split('T')[0]]: [...(plannedRecipes[selectedDate.toISOString().split('T')[0]] || []), recipe]
      });
    };

    return (
      <div className="calendar-view">
        <h1>Calendar View</h1>
        <Calendar onDateClick={handleDateClick} />
        {selectedDate && (
          <div className="planned-recipes">
            <h2>Planned Recipes for {selectedDate.toDateString()}</h2>
            <ul>
              {plannedRecipes[selectedDate.toISOString().split('T')[0]]?.map((recipe, index) => (
                <li key={index}>{recipe.title}</li>
              ))}
            </ul>
            <button onClick={() => handleAddRecipe({ title: 'Spaghetti Carbonara' })}>Add Spaghetti Carbonara</button>
            <button onClick={() => handleAddRecipe({ title: 'Chicken Curry' })}>Add Chicken Curry</button>
          </div>
        )}
      </div>
    );
  }

  export default CalendarView;
