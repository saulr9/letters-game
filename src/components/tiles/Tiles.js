import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Tile from './Tile';

import boardLetters from '../../data/letters';
import './Tiles.module.css';

function Tiles() {
  const [letters, setLetters] = useState([]);
  const { board } = boardLetters;

  useEffect(() => {
    const shuffledBoard = board.sort(() => 0.5 - Math.random());
    setLetters(shuffledBoard);
  }, []);

  return (
    <ul>
      {letters.map((letter, index) => (
        <Tile key={index} letter={letter} />
      ))}
    </ul>
  );
}

export default Tiles;
