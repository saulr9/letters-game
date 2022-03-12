import { useState, useContext, useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { GameContext } from '../../context/GameProvider';
import tileNeighbors from '../../utils/tiles';

function Tile({ letter, id }) {
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

  const handleClick = () => {
    setSelected(!selected);
    handleNeighbors();
    setWord((prevWord) => prevWord + letter);
  };

  return (
    <div
      ref={tileRef}
      data-id={id}
      className={`${!selected ? 'outline outline-[3px] outline-red-500' : ''}
        bg-gradient-to-t from-orange-500 to-orange-300 flex items-center justify-center rounded-lg overflow-hidden w-16 h-16`}
    >
      <button
        type="button"
        disabled={
          (neighborsTile.length !== 0 && !neighborsTile.includes(id)) ||
          selected
        }
        className={`${validWord && selected ? 'from-lime-700 to-lime-500' : ''}
        ${
          !validWord && selected ? 'from-red-900 to-red-500' : ''
        } bg-gradient-to-t min-w-full min-h-full`}
        onClick={handleClick}
      >
        <small className="drop-shadow font-bold text-white text-3xl">
          {letter}
        </small>
      </button>
    </div>
  );
}

Tile.propTypes = {
  letter: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

export default Tile;
