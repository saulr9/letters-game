import Game from '../Game/Game';
import { GameProvider } from '../../context/GameProvider';

function App() {
  return (
    <div className="container grid items-center justify-center mx-auto min-h-screen">
      <GameProvider>
        <Game />
      </GameProvider>
    </div>
  );
}

export default App;
