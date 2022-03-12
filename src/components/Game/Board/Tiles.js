import { useContext } from 'react';
import Tile from './Tile';
import { GameContext } from '../../../context/GameProvider';

function Tiles() {
  const { letters } = useContext(GameContext);

  return (
    <div className="grid grid-cols-[repeat(4,_max(64px))] gap-x-4 sm:gap-y-4 items-center justify-center">
      {letters.map((letter, index) => (
        <Tile key={index} letter={letter} id={index} />
      ))}
    </div>
  );
}

export default Tiles;
