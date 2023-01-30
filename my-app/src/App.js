import logo from './logo.svg';
import './App.css';
import FunctionalGreetings from "./components/FunctionalGreetings"

function App() {
  return (
    <div className="App">
      <FunctionalGreetings 
                greeting="nice to meet you!"
                name="Muzhda"
                age="30"
      />
    </div>
  );
}

export default App;
