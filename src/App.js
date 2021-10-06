import './App.css';
import FoundationHeader from './components/FoundationHeader';
import Aside from './components/Aside';
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <FoundationHeader />
      <Home />
      <Aside />
    </div>
  );
}

export default App;
