import React, { createContext, useState, useCallback } from 'react';
import PropTypes from 'prop-types';

const GameContext = createContext();
function GameProvider({ children }) {
  const [word, setWord] = useState('');
  const [validWord, setValidWord] = useState(false);

  const clearWord = useCallback(() => {
    setWord('');
  }, [word]);
  const [neighborsTiles, setNeighborsTiles] = useState([]);

  return (
    <GameContext.Provider
      value={{
        clearWord,
        word,
        setWord,
        neighborsTiles,
        setNeighborsTiles,
        validWord,
        setValidWord
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
GameProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export { GameContext, GameProvider };
