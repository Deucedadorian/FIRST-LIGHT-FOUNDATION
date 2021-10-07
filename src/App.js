import './App.css';
import FoundationHeader from './components/FoundationHeader';
import FunHeader from './components/FunHeader';
import About from './components/About';
import Aside from './components/Aside';
import Home from './components/Home';
import BookEvent from './components/BookEvent';
import MissionStatement from './components/MissionStatement';

function App() {
  return (
    <div className="App">
      <FoundationHeader />
      <About />
      <MissionStatement />
      <FunHeader />
      <Home />
      <Aside />
      <BookEvent />
    </div>
  );
}

export default App;
