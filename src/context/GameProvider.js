import {
  createContext,
  useState,
  useEffect,
  useCallback,
  useMemo
} from 'react';
import PropTypes from 'prop-types';
import dictionary from '../data/dictionary';
import boardLetters from '../data/letters';

const { board } = boardLetters;
const GameContext = createContext();

function GameProvider({ children }) {
  const [letters, setLetters] = useState(board);
  const [word, setWord] = useState('');
  const [validWord, setValidWord] = useState(false);
  const [neighborsTile, setNeighborsTile] = useState([]);
  const { words } = dictionary;

  const shuffledBoard = useCallback(() =>
    board.sort(() => 0.5 - Math.random())
  );

  const clearWord = useCallback(() => {
    setWord('');
    setNeighborsTile([]);
    setLetters(shuffledBoard);
  }, [word]);

  useEffect(() => {
    const lowerCaseWord = word.toLowerCase();
    const isValidWord = words.includes(lowerCaseWord);
    setValidWord(isValidWord);
  }, [word]);

  const providerValue = useMemo(
    () => ({
      clearWord,
      word,
      setWord,
      neighborsTile,
      setNeighborsTile,
      validWord,
      setValidWord,
      letters,
      setLetters
    }),
    [word, validWord]
  );

  return (
    <GameContext.Provider value={providerValue}>
      {children}
    </GameContext.Provider>
  );
}
GameProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export { GameContext, GameProvider };
