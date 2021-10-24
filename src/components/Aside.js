import Hamburger from 'hamburger-react'

const Aside = (props) => {

  const handleClick = (page, showImage, foundationHeader) => {
    props.handlePageChange(page);
    props.setTurtle(showImage);
    props.setHeader(foundationHeader);
  }

  return (
    <aside className="sidebar-container container aside">
      <div className="navigation">
        <Hamburger toggled={props.showAside} toggle={props.toggleAside} />
      </div>
      <div className={props.showAside ? 
      (
         "show-aside"
      ) : ( 
          "hidden" 
      )
    } id="sidebar" name="Sidebar">
        <nav className="widget-content">
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
        </nav>
      </div>
    </aside>
  );
};

export default Aside;
