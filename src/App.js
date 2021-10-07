import './App.css';
import FoundationHeader from './components/FoundationHeader';
import FunHeader from './components/FunHeader';
import About from './components/About';
import Aside from './components/Aside';
import Home from './components/Home';
import BookEvent from './components/BookEvent';

function App() {
  return (
    <div className="App">
      <FoundationHeader />
      <About />
      <FunHeader />
      <Home />
      <Aside />
      <BookEvent />
    </div>
  );
}

export default App;
