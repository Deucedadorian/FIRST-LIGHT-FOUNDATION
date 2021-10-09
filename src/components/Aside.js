const Aside = (props) => {
  return (
    <aside className="sidebar-container container sidebar-invisible">
      <div className="navigation">
        {/* little back arrow icon */}
      </div>
      <div className="section" id="sidebar" name="Sidebar">
        <div className="widget PageList" data-version="2" id="PageList2">
          <div className="widget-content">
            <ul>
            <li>
                <button onClick={props.switchPage} name="home">
                  Home
                </button>
              </li>
              <li>
                <button onClick={props.switchPage} name="mission">
                  Mission Statement
                </button>
              </li>
              <li>
                <button onClick={props.switchPage} name="about">
                  Annawon Weeden
                </button>
              </li>
              <li>
                <button onClick={props.switchPage} name="fun">
                  First Light Fun
                </button>
              </li>
              <li>
                <button name="fashion">
                  <a href="https://firstlightfashion.square.site/" target='_blank' rel='noreferrer'>First Light Fashion</a>
                </button>
              </li>
              <li>
                <button onClick={props.switchPage} name="book">
                  Book Event
                </button>
              </li>
              <li className="selected">
                <button onClick={props.switchPage} name="events">
                  Public Events
                </button>
              </li>
              <li>
                <button onClick={props.switchPage} name="educate">
                  Educational Resources
                </button>
              </li>
              <li>
                <button onClick={props.switchPage} name="reviews">
                  Reviews
                </button>
              </li>
            </ul> 
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
