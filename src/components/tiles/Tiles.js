import { useEffect, useState } from 'react';
import Tile from './Tile';
import boardLetters from '../../data/letters';

function Tiles() {
  const [letters, setLetters] = useState([]);
  const { board } = boardLetters;

  useEffect(() => {
    const shuffledBoard = board.sort(() => 0.5 - Math.random());
    setLetters(shuffledBoard);
  }, []);

  return (
    <div className="grid grid-cols-[repeat(4,_max(64px))] gap-x-4 sm:gap-y-4 items-center justify-center">
      {letters.map((letter, index) => (
        <Tile key={index} letter={letter} id={index} />
      ))}
    </div>
  );
}

export default Tiles;
