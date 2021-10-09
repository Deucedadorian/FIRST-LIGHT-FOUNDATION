const Aside = (props) => {

  const handleClick = (page, showImage, foundationHeader) => {
    props.handlePageChange(page);
    props.setTurtle(showImage);
    props.setHeader(foundationHeader)
  }

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
                <a href='/' onClick={(e) => {
                  e.preventDefault();
                  handleClick('home', true, true);
                }}>
                  Home
                </a>
              </li>
              <li>
                <a href='/' onClick={(e) => {
                    e.preventDefault();
                    handleClick('mission', false, true);
                  }}>
                  Mission Statement
                </a>
              </li>
              <li>
                <a href='/' onClick={
                  (e) => {
                    e.preventDefault();
                    handleClick('about', false, true);
                  }}>
                  Annawon Weeden
                </a>
              </li>
              <li>
                <a href='/' onClick={
                  (e) => {
                    e.preventDefault();
                    handleClick('fun', true, false);
                  }}>
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
                    handleClick('book', false, false);
                  }}>
                  Book Event
                </a>
              </li>
              <li className="selected">
                <a href='/' onClick={
                  (e) => {
                    e.preventDefault();
                    handleClick('events', false, true);
                  }}>
                  Public Events
                </a>
              </li>
              <li>
                <a href='/' onClick={
                  (e) => {
                    e.preventDefault();
                    handleClick('educate', false, false);
                  }}>
                  Educational Resources
                </a>
              </li>
              <li>
                <a href='/' onClick={
                  (e) => {
                    e.preventDefault();
                    handleClick('reviews', false, true);
                  }}>
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
