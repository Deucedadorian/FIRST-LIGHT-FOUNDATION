import { useState } from 'react';
import './App.css';
import FoundationHeader from './components/FoundationHeader';
import FunHeader from './components/FunHeader';
import About from './components/About';
import Aside from './components/Aside';
import Home from './components/Home';
import BookEvent from './components/BookEvent';
import MissionStatement from './components/MissionStatement';
import Turtle from './components/Turtle';
import FirstLightFun from './components/FirstLightFun';
import Reviews from './components/Reviews';
import PublicEvents from './components/PublicEvents';
import EducationalResources from './components/EducationResources';

function App() {
  const [foundationHeader, setHeader] = useState(true);
  const [turtle, setTurtle] = useState(true);
  const [page, setPage] = useState(<Home />);

  // const switchHeader = () => {
  //   setHeader(!foundationHeader)
  // }

  function switchPage(event) {
    if (event.target.name === 'home') setPage(< Home/>)
    else if(event.target.name === 'mission') setPage(<MissionStatement />)
    else if(event.target.name === 'about') setPage(<About />)
    else if(event.target.name === 'fun') setPage(<FirstLightFun />)
    else if(event.target.name === 'events') setPage(<PublicEvents />)
    else if(event.target.name === 'reviews') setPage(<Reviews />)
    else if(event.target.name === 'book') setPage(<BookEvent />)
    else if(event.target.name === 'educate') setPage(<EducationalResources />)
  }

  return (
    <div className="App">
      {foundationHeader ? <FoundationHeader /> : <FunHeader />}
      {turtle ? <Turtle /> : ""}
      {page}
      <Aside switchPage={switchPage} setHeader={setHeader} setTurtle={setTurtle} />
    </div>
  );
}

export default App;
