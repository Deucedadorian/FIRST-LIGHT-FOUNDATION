import React, { useState } from "react";
import { BrowserRouter, Switch, Route, } from "react-router-dom";

import './App.css';

import Header from './components/Header';
import Turtle from './components/Turtle';
import Home from './pages/Home';
import About from './pages/About';
import MissionStatement from './pages/MissionStatement';
import BookEvent from './pages/BookEvent';
import EducationalResources from './pages/EducationResources';

function App() {
  const [foundationHeader, setHeader] = useState(true);

  return (
    <div className="App">      
      <BrowserRouter>
        <Header 
          foundationHeader={foundationHeader}
          setHeader={setHeader} 
        />
        <main>
          <Switch>
            <Route exact path='/'>
              <Turtle />
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
            <Route path='/educational-resources'>
              <EducationalResources />
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
