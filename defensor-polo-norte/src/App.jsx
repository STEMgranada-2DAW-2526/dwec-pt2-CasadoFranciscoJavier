import './App.css'

import { GameProvider } from './GameContext';
import Game from './Game';
import UpgradesBoard from './UpgradesBoard';


export default function App() {

  return (
    <>
      <GameProvider>
      
          <h1 className='text-center'> Defensor del Polo Norte </h1>
          <Game />
          <br />
          <UpgradesBoard />
      </GameProvider>
    </>
  )
}
