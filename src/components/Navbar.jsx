import React from 'react';
  import { Link } from 'react-router-dom';

  function Navbar() {
    return (
      <nav className="navbar">
        <div className="navbar-logo">RecipeApp</div>
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/recetas">Recetas</Link></li>
          <li><Link to="/calendar">Calendar</Link></li>
          <li><Link to="/menu-planning">Menu Planning</Link></li>
        </ul>
      </nav>
    );
  }

  export default Navbar;
