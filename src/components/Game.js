import { useEffect, useContext } from 'react';
import Tiles from './tiles/Tiles';
import Word from './word/Word';
import ClearWord from './word/ClearWord';
import dictionary from '../data/dictionary';
import { GameContext } from '../context/Game';

function Game() {
  const { clearWord, word, setWord, setValidWord } = useContext(GameContext);
  const { words } = dictionary;

  useEffect(() => {
    const lowerCaseWord = word.toLowerCase();
    const isValidWord = words.includes(lowerCaseWord);
    setValidWord(isValidWord);
  }, [word]);

  return (
    <div className="App">
      <Tiles setWord={setWord} />
      <ClearWord clearWord={clearWord} />
      <Word word={word} />
    </div>
  );
}

export default Game;
