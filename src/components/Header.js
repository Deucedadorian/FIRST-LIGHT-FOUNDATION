import React, { useState } from "react";

import Navbar from './Navbar';

const Header = (props) => {
  return (
    <header className="centered-top-container" role="banner">
      <Navbar />
      <div className="centered-top">
        <div className="section" id="header" name="Header"> {
          props.foundationHeader ? (
            <div>
              <h1>
                FIRST LIGHT FOUNDATION
              </h1>
              <p>
                “Our future is only as strong as the foundation it’s built upon”
              </p>
            </div>
          ) : (
            <div>
              <div>
                <h1>
                  FIRST LIGHT FUN
                </h1>
              </div>
              <p>
                "A new era of education has begun &amp; it all starts with First Light Fun"
              </p>  
            </div>
          )
        }
        </div>
      </div>
    </header>
  )
}

export default Header;