const Header = () => {
  return (
    <header className="centered-top-container animating" role="banner">
      <div className="centered-top">
        <div className="hamburger-menu-container">
          <svg className="svg-icon-24 touch-icon hamburger-menu">
            {/* The Following line is the full line copied from the original site. 
            xlink:... and xmlns:... didn't work with react so the next line takes it out. 
            Just wanted to keep track of it incase I needed to add it back in some how.*/}
            {/* <use xlink:href="/responsive/sprite_v1_6.css.svg#ic_menu_black_24dp" xmlns:xlink="http://www.w3.org/1999/xlink"></use> */}
            <use href="/responsive/sprite_v1_6.css.svg#ic_menu_black_24dp" link="http://www.w3.org/1999/xlink"></use>
          </svg>
        </div>
        <div className="blog-name">
          <div className="section" id="header" name="Header"><div className="widget Header" data-version="2" id="Header1">
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
          </div></div>
          <nav role="navigation">
            <div className="section" id="page_list_top" name="Page List (Top)">
              <div className="widget PageList" data-version="2" id="PageList1">
                <h3 className="title">
                  Pages
                </h3>
                <div className="widget-content">
                  <div className="overflowable-container overflowable-2">
                    <div className="overflowable-contents">
                      <div className="container">
                        <ul className="tabs">
                          {/* <li className="overflow-button-container" style={"display: none;"} aria-hidden="true"><div className="overflow-button">
                            <a>More…</a>
                          </div></li> */}
                          <li className="overflowable-item selected" aria-hidden="false">
                            <a href="http://www.firstlightfoundation.net/">Home</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}


export default Header;