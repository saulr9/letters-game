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
      className={`${!selected ? 'outline outline-[3px] outline-red-500' : ''}
        bg-gradient-to-t from-orange-500 to-orange-300 flex items-center justify-center rounded-lg overflow-hidden w-16 h-16`}
    >
      <button
        type="button"
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
  letter: PropTypes.string.isRequired
};

export default Tile;
