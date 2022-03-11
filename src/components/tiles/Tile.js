import { useState, useContext, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { GameContext } from '../../context/Game';

function Tile({ letter }) {
  const [selected, setSelected] = useState(false);
  const { word, setWord, validWord } = useContext(GameContext);
  const tileRef = useRef();

  useEffect(() => {
    if (word.length === 0) {
      setSelected(false);
    }
  }, [word]);

  useEffect(() => {
    // console.log(letter, tileRef.current.getBoundingClientRect());
  }, [selected]);

  const handleClick = () => {
    setSelected(!selected);

    setWord((prevWord) => {
      const newWord = selected
        ? prevWord.replace(letter, '')
        : prevWord + letter;
      return newWord;
    });
  };

  return (
    <div
      ref={tileRef}
      className={`${validWord && selected ? 'from-green-500 to-green-300' : ''}
      ${!validWord && selected ? 'from-red-500 to-red-300' : ''}
      bg-gradient-to-t from-orange-500 to-orange-300 flex items-center justify-center rounded w-16 h-16`}
    >
      <button
        type="button"
        className="min-w-full min-h-full"
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
  letter: PropTypes.string.isRequired
};

export default Tile;
