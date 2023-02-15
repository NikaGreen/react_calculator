import './App.css';
import { useState } from 'react';
import Keypad from './components/keypad'

function App() {
  const [input, setInput] = useState('');
  const handleClick = (value) => {
    //console.log('num' , value)
    setInput(input + value);
  };
  
  const handleEqual = () => {

    console.log('equal' , input)
    //setInput(eval(input).toString());
  };

  const handleClear = () => {
   // console.log('clear')
    setInput("");
  };
  
  return (
    <div className='App'>
      <div className='calculator'>
        <input className='display' type="text"
              value={input} readOnly />

        <Keypad 
          handleClear = {handleClear}
          handleClick = {handleClick}
          handleEqual = {handleEqual}
        />
      </div>
    </div>
  );
}

export default App;
