import logo from './logo.svg';
import SearchSection  from './page/SearchSection.js'
import './App.css';

function App() {
  return (
    <div className="App" >
     <img src={logo} className="App-logo" alt="logo" />
     <SearchSection />
    </div>
  );
}

export default App;
