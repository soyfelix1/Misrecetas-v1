import React from 'react';
  import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
  import Navbar from './components/Navbar';
  import Home from './components/Home';
  import Recetas from './components/Recetas';
  import RecipeDetailView from './components/RecipeDetailView';
  import CalendarView from './components/CalendarView';
  import MenuPlanningView from './components/MenuPlanningView';

  function App() {
    return (
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recetas" element={<Recetas />} />
            <Route path="/recipe/:id" element={<RecipeDetailView />} />
            <Route path="/calendar" element={<CalendarView />} />
            <Route path="/menu-planning" element={<MenuPlanningView />} />
          </Routes>
        </div>
      </Router>
    );
  }

  export default App;
