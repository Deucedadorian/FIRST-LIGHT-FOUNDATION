const Aside = () => {
  return (
    <aside className="sidebar-container container sidebar-invisible">
      <div className="navigation">
        <svg className="svg-icon-24 touch-icon sidebar-back rtl-reversible-icon">
          {/*
          // this use tag is the OG. refactored to work with react.
          <use
            xlink:href="/responsive/sprite_v1_6.css.svg#ic_arrow_back_black_24dp"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          ></use> */}
          <use
            href="/responsive/sprite_v1_6.css.svg#ic_arrow_back_black_24dp"
            link="http://www.w3.org/1999/xlink"
          ></use>
        </svg>
      </div>
      <div className="section" id="sidebar" name="Sidebar">
        <div className="widget PageList" data-version="2" id="PageList2">
          <div className="widget-content">
            <ul>
              <li>
                <a href="http://www.firstlightfoundation.net/p/mission-statement.html">
                  Mission Statement{" "}
                </a>
              </li>
              <li>
                <a href="http://www.firstlightfoundation.net/p/annawon-weeden-bio-page.html">
                  Annawon Weeden
                </a>
              </li>
              <li>
                <a href="https://firstlightfun.blogspot.com">
                  First Light Fun{" "}
                </a>
              </li>
              <li>
                <a href="https://squareup.com/store/annawon-weeden/">
                  First Light Fashion
                </a>
              </li>
              <li className="selected">
                <a href="http://www.firstlightfoundation.net/p/public-events.html">
                  Public Events{" "}
                </a>
              </li>
              <li>
                <a href="http://www.firstlightfoundation.net/p/reviews-and-testimonials.html">
                  Reviews
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
