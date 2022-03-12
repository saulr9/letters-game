import {
  createContext,
  useState,
  useEffect,
  useCallback,
  useMemo
} from 'react';
import PropTypes from 'prop-types';
import dictionary from '../data/dictionary';

const GameContext = createContext();

function GameProvider({ children }) {
  const [word, setWord] = useState('');
  const [validWord, setValidWord] = useState(false);
  const [neighborsTile, setNeighborsTile] = useState([]);
  const { words } = dictionary;

  const clearWord = useCallback(() => {
    setWord('');
    setNeighborsTile([]);
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
      setValidWord
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
