const FunHeader = () => {
  return (
    <header class="centered-top-container" role="banner">
      <div class="centered-top">
        <div class="hamburger-menu-container">
          <svg class="svg-icon-24 touch-icon hamburger-menu">
            <use href="/responsive/sprite_v1_6.css.svg#ic_menu_black_24dp" link="http://www.w3.org/1999/xlink"></use>
          </svg>
        </div>
        <div class="blog-name">
          <div class="section" id="header" name="Header">
            <div class="widget Header" data-version="2" id="Header1">
              <div class="header-widget">
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

export default FunHeader;