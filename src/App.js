import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';


import './App.css';

import Header from './components/Header';
// import Turtle from './components/Turtle';
// import Aside from './components/Aside';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import MissionStatement from './pages/MissionStatement';
import BookEvent from './pages/BookEvent';
import PublicEvents from './pages/PublicEvents';
import EducationalResources from './pages/EducationResources';
// import Reviews from './pages/Reviews';
// import FirstLightFun from './pages/FirstLightFun';

import Hamburger from 'hamburger-react';
import { Col, Row } from 'react-bootstrap';

function App() {
  const [foundationHeader, setHeader] = useState(true);
  // const [turtle, setTurtle] = useState(true);
  // const [page, setPage] = useState('home');
  const [showAside, setShowAside] = useState(false);

  // const renderPage = () => {
  //   console.log(page);
  //   if (page === 'home') return < Home/>;
  //   if(page === 'mission') return <MissionStatement />;
  //   if(page === 'about') return <About />;
  //   if(page === 'fun') return <FirstLightFun />;
  //   if(page === 'book') return <BookEvent />;
  //   if(page === 'events') return <PublicEvents />;
  //   if(page === 'educate') return <EducationalResources />;
  //   if(page === 'reviews') return <Reviews />; 
  // }

  // const handlePageChange = (page) => {
  //   setPage(page);
  // }

  const toggleAside = () => {
    setShowAside(!showAside);
  }

  return (
    <div className="App">
      <Container>
        <Row>
          <Col xs={1} >
            <Hamburger />
          </Col>
          <Col xs={17} md={8}>
            <Header 
              foundationHeader={foundationHeader}
              setHeader={setHeader} 
              // showAside={showAside}
              // setShowAside={setShowAside}
              toggleAside={toggleAside}
            />
          </Col>
        </Row>
      </Container>
      {/* <Aside handlePageChange={handlePageChange}
        setHeader={setHeader} 
        foundationHeader={foundationHeader} 
        setTurtle={setTurtle}
        setShowAside={setShowAside}
        showAside={showAside}
      />  */}
      <BrowserRouter>
        <Navbar />
        <div className="container mt-2" style={{ marginTop: 40 }}>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/mission-statement'>
              <MissionStatement />
            </Route>
            <Route path='/book-event'>
              <BookEvent />
            </Route>
            <Route path='/public-events'>
              <PublicEvents />
            </Route>
            <Route path='/educational-resources'>
              <EducationalResources />
            </Route>
            {/* <Route path='reviews'>
              <Reviews />
            </Route> */}
            {/* <Route path='first-light-fun'>
              <FirstLightFun />
            </Route> */}
          </Switch>
        </div>
      {/* <Turtle className={turtle ?  "visible" : "hidden"} />
      {renderPage()} */}
      </BrowserRouter>
    </div>
  );
}

export default App;
