import React, {useState} from 'react';
import './App.css';

function App() {

    const [counter, setCounter] = useState(0);
    
    const incrementer = () => {
      setCounter(counter + 1);
    }




  return (
    <div className="App">
      <h1>Test</h1>
      <h2>Counter {counter}</h2>
      <button onClick = {incrementer}>click here</button>
    </div>
  );
}

export default App;
