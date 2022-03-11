import React, { useState, useContext, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { GameContext } from '../../context/Game';
import styles from './Tile.module.css';

function Tile({ letter }) {
  const [selected, setSelected] = useState(false);
  const { word, setWord } = useContext(GameContext);
  const tileRef = useRef();

  useEffect(() => {
    if (word.length === 0) {
      setSelected(false);
    }
  }, [word]);

  useEffect(() => {
    console.log(letter, tileRef.current.getBoundingClientRect());
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
    <li ref={tileRef} className={selected ? styles.selected : ''}>
      <button type="button" onClick={handleClick}>
        {letter}
      </button>
    </li>
  );
}

Tile.propTypes = {
  letter: PropTypes.string.isRequired
};

export default Tile;
