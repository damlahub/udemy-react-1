import './App.css';
import {useState} from 'react';
function App() {
  const [value, setValue] = useState(0) //value = 0
  const handleClick=()=>{
    setValue(value + 1 ) //value= 0 + 1 vakue = 1 + 1 value = 2 ... 
  }
  const resetValue=()=>{
    setValue(0) // value = 0
  }
  return (
    <div className="App">
      <h1>{value}</h1>
      <button onClick={handleClick}>Arttır</button>
      <button onClick={resetValue}>Sıfırla</button>
    </div>
  );
}

export default App;