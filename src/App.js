import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [isPalindrome, setIsPalindrome] = useState(null);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const checkPalindrome = () => {
    const cleanedInput = inputValue.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversedInput = cleanedInput.split('').reverse().join('');
    setIsPalindrome(cleanedInput === reversedInput);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Verificador de palíndromos</h1>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Introduce texto o números"
        />
        <button onClick={checkPalindrome}>Verificar</button>
        {isPalindrome !== null && (
          <p>{isPalindrome ? 'Es capicúa' : 'No es capicúa'}</p>
        )}
      </header>
    </div>
  );
}

export default App;