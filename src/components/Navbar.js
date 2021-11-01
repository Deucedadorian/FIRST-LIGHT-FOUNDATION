// import Hamburger from 'hamburger-react';
import { NavLink } from 'react-router-dom';
import React, { useState } from "react";

const Navbar = (props) => {
  const [isOpen, setOpen] = useState(false);

  // const handleClick = (page, showImage, foundationHeader) => {
  //   props.handlePageChange(page);
  //   props.setTurtle(showImage);
  //   props.setHeader(foundationHeader);
  // }

  return (
    <nav 
      className="navbar is-primnary"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <a
            role="button"
            className={`navbar-burger burger ${isOpen && "is-active"}`}
            aria-label="menu"
            aria-expanded="false"
            onClick={() => setOpen(!isOpen)}
            href
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
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
          to="/public-events"
        >
          Public Events
        </NavLink>

        <NavLink
          className="navbar-item"
          activeClassName="is-active"
          to="/educations-resources"
        >
          Educational Resources
        </NavLink>

        <NavLink
          className="navbar-item"
          activeClassName="is-active"
          to="/reviews"
        >
          Reviews
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
