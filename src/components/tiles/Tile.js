import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Tile.module.css';

function Tile({ letter, setWord }) {
  const [selected, setSelected] = useState(false);
  const handleClick = () => {
    setSelected(!selected);

    setWord((prevWord) => {
      if (selected) {
        return prevWord.replace(letter, '');
      }
      return `${prevWord}${letter}`;
    });
  };
  return (
    <li className={selected ? styles.selected : ''}>
      <button type="button" onClick={handleClick}>
        {letter}
      </button>
    </li>
  );
}

Tile.propTypes = {
  letter: PropTypes.string.isRequired,
  setWord: PropTypes.func.isRequired
};

export default Tile;
