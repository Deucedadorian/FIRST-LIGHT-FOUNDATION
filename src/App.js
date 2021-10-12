import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Turtle from './components/Turtle';
import Aside from './components/Aside';
import Home from './components/Home';
import MissionStatement from './components/MissionStatement';
import About from './components/About';
import FirstLightFun from './components/FirstLightFun';
import BookEvent from './components/BookEvent';
import PublicEvents from './components/PublicEvents';
import EducationalResources from './components/EducationResources';
import Reviews from './components/Reviews';

function App() {
  const [foundationHeader, setHeader] = useState(true);
  const [turtle, setTurtle] = useState(true);
  const [page, setPage] = useState('home');
  const [showAside, setShowAside] = useState(true);

  const renderPage = () => {
    console.log(page);
    if (page === 'home') return < Home/>;
    if(page === 'mission') return <MissionStatement />;
    if(page === 'about') return <About />;
    if(page === 'fun') return <FirstLightFun />;
    if(page === 'book') return <BookEvent />;
    if(page === 'events') return <PublicEvents />;
    if(page === 'educate') return <EducationalResources />;
    if(page === 'reviews') return <Reviews />; 
  }

  const handlePageChange = (page) => {
    setPage(page);
  }

  return (
    <div className="App">
      <Header foundationHeader={foundationHeader} setHeader={setHeader} />
      <Aside handlePageChange={handlePageChange}
          setHeader={setHeader} 
          foundationHeader={foundationHeader} 
          setTurtle={setTurtle}
          setShowAside={setShowAside}
          showAside={showAside}/> 
      <Turtle className={turtle ?  "visible" : "hidden"} />
      {renderPage()}
    </div>
  );
}

export default App;
