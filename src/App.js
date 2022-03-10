import { useState, useEffect } from 'react';
import Tiles from './components/tiles/Tiles';
import Word from './components/word/Word';
import ClearWord from './components/word/ClearWord';
import dictionary from './data/dictionary';

import './App.css';

function App() {
  const { words } = dictionary;
  const [word, setWord] = useState('');
  const [valid, setValid] = useState(false);
  useEffect(() => {
    const isValidWord = words.includes(word.toLowerCase());
    setValid(isValidWord);
  }, [word]);
  return (
    <div className="App">
      <Tiles setWord={setWord} />
      <ClearWord setWord={setWord} />
      <Word word={word} isValid={valid} />
    </div>
  );
}

export default App;
