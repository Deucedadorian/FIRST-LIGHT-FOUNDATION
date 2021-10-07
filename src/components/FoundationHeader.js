const FoundationHeader = () => {
  return (
    <header className="centered-top-container animating" role="banner">
      <div className="centered-top">
        <div className="hamburger-menu-container">
          <svg className="svg-icon-24 touch-icon hamburger-menu">
            <use href="/responsive/sprite_v1_6.css.svg#ic_menu_black_24dp" link="http://www.w3.org/1999/xlink"></use>
          </svg>
        </div>
        <div className="blog-name">
        <div className="section" id="header" name="Header">
            <div>
              <h1>
                FIRST LIGHT FOUNDATION
              </h1>
            </div>
            <p>
              “Our future is only as strong as the foundation it’s built upon”
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}


export default FoundationHeader;