import './App.css';
import Body from './components/body/Body';
import Navbar from './components/navbar/Navbar';
import TokenState from './context/Token/TokenState';


function App() {
  return (
    <div className="App">
    <TokenState>
    <Navbar/>
    <Body/>
    </TokenState>
    </div>
  );
}

export default App;
