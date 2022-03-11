import Game from './components/Game';
import { GameProvider } from './context/Game';

function App() {
  return (
    <GameProvider>
      <Game />
    </GameProvider>
  );
}

export default App;
