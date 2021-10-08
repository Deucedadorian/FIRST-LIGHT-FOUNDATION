const FunHeader = () => {
  return (
    <header className="centered-top-container" role="banner">
      <div className="centered-top">
        <div className="hamburger-menu-container">
          <svg className="svg-icon-24 touch-icon hamburger-menu">
            {/* hamburger Button */}
          </svg>
        </div>
        <div className="blog-name">
          <div className="section" id="header" name="Header">
            <div>
              <h1>
                FIRST LIGHT FUN
              </h1>
            </div>
            <p>
              "A new era of education has begun &amp; it all starts with First Light Fun"
            </p>  
          </div>
        </div>
      </div>
    </header>
  )
}

export default FunHeader;