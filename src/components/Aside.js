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
                <a href='/' onClick={
                  (e) => {
                    e.preventDefault();
                    props.handlePageChange('home');
                    props.setTurtle(true);
                    props.setHeader(true);
                  }
                }>
                  Home
                </a>
              </li>
              <li>
                <a href='/' onClick={
                  (e) => {
                    e.preventDefault();
                    props.handlePageChange('mission');
                    props.setTurtle(false);
                    props.setHeader(true);
                  }
                }>
                  Mission Statement
                </a>
              </li>
              <li>
                <a href='/' onClick={
                  (e) => {
                    e.preventDefault();
                    props.handlePageChange('about');
                    props.setTurtle(false);
                    props.setHeader(true);
                  }
                }>
                  Annawon Weeden
                </a>
              </li>
              <li>
                <a href='/' onClick={
                  (e) => {
                    e.preventDefault();
                    props.handlePageChange('fun');
                    props.setTurtle(true);
                    props.setHeader(false);
                  }
                }>
                  First Light Fun
                </a>
              </li>
              <li>
                <a href="https://firstlightfashion.square.site/" target='_blank' rel='noreferrer'>
                  First Light Fashion
                </a>
              </li>
              <li>
                <a href='/' onClick={
                  (e) => {
                    e.preventDefault();
                    props.handlePageChange('book');
                    props.setTurtle(false);
                    props.setHeader(false);
                  }
                }>
                  Book Event
                </a>
              </li>
              <li className="selected">
                <a href='/' onClick={
                  (e) => {
                    e.preventDefault();
                    props.handlePageChange('events');
                    props.setTurtle(false);
                    props.setHeader(true);
                  }
                }>
                  Public Events
                </a>
              </li>
              <li>
                <a href='/' onClick={
                  (e) => {
                    e.preventDefault();
                    props.handlePageChange('educate');
                    props.setTurtle(false);
                    props.setHeader(false);
                  }
                }>
                  Educational Resources
                </a>
              </li>
              <li>
                <a href='/' onClick={
                  (e) => {
                    e.preventDefault();
                    props.handlePageChange('reviews');
                    props.setTurtle(false);
                    props.setHeader(true);
                  }
                }>
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
