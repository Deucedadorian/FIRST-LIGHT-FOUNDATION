import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import Hamburger from 'hamburger-react';

const Navbar = () => {

  const [isOpen, setOpen] = useState(false);
  
  return (
    <nav 
      className="navbar is-primnary"
      role="navigation"
      aria-label="main navigation"
    >
      <a
        role="button"
        className={`navbar-burger burger ${isOpen && "is-active"}`}
        aria-label="menu"
        aria-expanded="false"
        onClick={() => setOpen(!isOpen)}
        href
      >
        <Hamburger />
      </a>
      <div className={isOpen ? "navbar-item-container" : "hidden" }>
        <NavLink
          className="navbar-item"
          activeClassName="is-active"
          to="/"
          exact
        >
          Home
        </NavLink>

        <NavLink
          className="navbar-item"
          activeClassName="is-active"
          to="/about"
        >
          About
        </NavLink>
        
        <NavLink
          className="navbar-item"
          activeClassName="is-active"
          to="/mission-statement"
        >
          Mission Statement
        </NavLink>

        <NavLink
          className="navbar-item"
          activeClassName="is-active"
          to="/book-event"
        >
          Book Event
        </NavLink>

        <NavLink
          className="navbar-item"
          activeClassName="is-active"
          to="/educational-resources"
        >
          Educational Resources
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
