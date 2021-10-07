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
            <div className="widget Header" data-version="2" id="Header1">
              <div className="header-widget">
                <div>
                  <h1>
                    First Light Foundation
                  </h1>
                </div>
                <p>
                  “Our future is only as strong as the foundation it’s built upon”

                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}


export default FoundationHeader;