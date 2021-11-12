// import Hamburger from 'hamburger-react';
import { NavLink } from 'react-router-dom';
// import React, { useState } from "react";
import React from "react";

const Navbar = (props) => {

  // const handleClick = (page, showImage, foundationHeader) => {
  //   props.handlePageChange(page);
  //   props.setTurtle(showImage);
  //   props.setHeader(foundationHeader);
  // }

  return (
    <nav 
      className={ props.isOpen ? "navbar is-primnary" : "hidden" }
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-item-container">
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

        {/* <NavLink
          className="navbar-item"
          activeClassName="is-active"
          to="/public-events"
        >
          Public Events
        </NavLink> */}

        <NavLink
          className="navbar-item"
          activeClassName="is-active"
          to="/educational-resources"
        >
          Educational Resources
        </NavLink>

        {/* <NavLink
          className="navbar-item"
          activeClassName="is-active"
          to="/reviews"
        >
          Reviews
        </NavLink> */}
      </div>
    </nav>
  );
};

export default Navbar;
