import { useState } from 'react';
import './App.css';
import FoundationHeader from './components/FoundationHeader';
import FunHeader from './components/FunHeader';
import About from './components/About';
import Aside from './components/Aside';
import Home from './components/Home';
import BookEvent from './components/BookEvent';
import MissionStatement from './components/MissionStatement';

function App() {
  const [foundationHeader, setHeader] = useState(true);

  const switchHeader = () => {
    setHeader(!foundationHeader)
  }

  return (
    <div className="App">
      {foundationHeader ? <FoundationHeader /> : <FunHeader />

      }
      
      <Home />
    </div>
  );
}

export default App;
