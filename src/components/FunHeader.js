const FunHeader = () => {
  return (
    <header class="centered-top-container" role="banner">
      <div class="centered-top">
        <div class="hamburger-menu-container">
          <svg class="svg-icon-24 touch-icon hamburger-menu">
            <use xlink:href="/responsive/sprite_v1_6.css.svg#ic_menu_black_24dp" xmlns:xlink="http://www.w3.org/1999/xlink"></use>
          </svg>
        </div>
        <div class="blog-name">
          <div class="section" id="header" name="Header"><div class="widget Header" data-version="2" id="Header1">
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
          </div></div>
          <nav role="navigation">
            <div class="section" id="page_list_top" name="Page List (Top)"><div class="widget PageList" data-version="2" id="PageList1">
              <h3 class="title">
                Pages
              </h3>
              <div class="widget-content">
                <div class="overflowable-container overflowable-2">
                  <div class="overflowable-contents">
                    <div class="container">
                      <ul class="tabs">
                        {/* style="display: none;" */}
                        <li class="overflow-button-container"  aria-hidden="true">
                          <div class="overflow-button">
                          {/* <a>More…</a> */}
                        </div></li><li class="overflowable-item selected" aria-hidden="false">
                          <a href="http://www.firstlightfoundation.net/">Home</a>
                        </li>
                      </ul>
                    </div>
                  {/* style="position: absolute; visibility: hidden; inset: 0px;" */}
                  </div><div class="overflowable-backup" aria-hidden="true" ><div class="overflowable-contents overflowable-backup-content">
                    <div class="container">
                      <ul class="tabs">
                        <li class="overflowable-item selected">
                          <a href="http://www.firstlightfoundation.net/">Home</a>
                        </li>
                      </ul>
                    </div>
                  </div></div>

                {/* style="display: none;" */}
                </div><div class="overflow-popup" >
                  <div class="container">
                    <ul class="tabs">
                      <li class="overflowable-item selected">
                        <a href="http://www.firstlightfoundation.net/">Home</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div></div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default FunHeader;