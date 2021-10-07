import './App.css';
import FoundationHeader from './components/FoundationHeader';
import FunHeader from './components/FunHeader';
import Aside from './components/Aside';
import Home from './components/Home';
import BookEvent from './components/BookEvent';

function App() {
  return (
    <div className="App">
      <FoundationHeader />
      <FunHeader />
      <Home />
      <Aside />
      <BookEvent />
    </div>
  );
}

export default App;
