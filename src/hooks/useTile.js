import { useState, useContext, useEffect, useRef, useCallback } from 'react';
import { GameContext } from '../context/GameProvider';
import tileNeighbors from '../utils/tiles';

function useTile() {
  const [selected, setSelected] = useState(false);
  const { word, setWord, validWord, neighborsTile, setNeighborsTile } =
    useContext(GameContext);
  const tileRef = useRef();

  useEffect(() => {
    if (word.length === 0) {
      setSelected(false);
    }
  }, [word]);

  const handleNeighbors = useCallback(() => {
    const neighbors = tileNeighbors(tileRef.current.getAttribute('data-id'));
    setNeighborsTile(neighbors);
  });

  return {
    selected,
    setSelected,
    handleNeighbors,
    tileRef,
    word,
    setWord,
    validWord,
    neighborsTile,
    setNeighborsTile
  };
}

export default useTile;
