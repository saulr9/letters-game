import { useContext } from 'react';
import Tiles from './tiles/Tiles';
import Word from './word/Word';
import ClearWord from './word/ClearWord';
import { GameContext } from '../context/GameProvider';
import useIsMobile from '../hooks/useIsMobile';

function Game() {
  const { clearWord, word } = useContext(GameContext);
  const isMobile = useIsMobile();

  return (
    <div className="grid sm:grid-cols-2 md:gap-6 min-h-screen sm:min-h-fit py-4">
      <div className="grid">
        {isMobile && <ClearWord clearWord={clearWord} />}
        <Tiles />
      </div>
      <div className="grid">
        {!isMobile && <ClearWord clearWord={clearWord} />}
        <Word word={word} />
      </div>
    </div>
  );
}

export default Game;
