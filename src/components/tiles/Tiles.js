import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Tile from './Tile';

import boardLetters from '../../data/letters';
import './Tiles.module.css';

function Tiles({ word, setWord }) {
  const [letters, setLetters] = useState([]);
  const { board } = boardLetters;

  useEffect(() => {
    const shuffledBoard = board.sort((a, b) => 0.5 - Math.random());
    setLetters(shuffledBoard);
  }, []);

  return (
    <ul>
      {letters.map((letter) => (
        <Tile key={letter} letter={letter} setWord={setWord} />
      ))}
    </ul>
  );
}
Tiles.propTypes = {
  word: PropTypes.string.isRequired,
  setWord: PropTypes.func.isRequired
};

export default Tiles;
