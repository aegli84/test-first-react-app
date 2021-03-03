import React, {useState} from 'react';
import './App.css';

function App() {

    const [counter, setCounter] = useState(0);
    
    const incrementer = () => {
      setCounter(counter + 1);
    }




  return (
    <div className="App" className = "App-header">
      <h1>Super counter</h1>
      <h2> {counter}</h2>
      <button onClick = {incrementer}>click here</button>
    </div>
  );
}

export default App;
