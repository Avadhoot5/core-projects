
import { useState } from 'react'
import './App.css'
import StartGame from './components/StartGame'
import GamePlay from './components/GamePlay';

function App() {

  const [isGameStarted, setIsGameStarted] = useState(true);

  const toogleGamePlay = () => {
    setIsGameStarted(prev => !prev);
  }

  return (
    <>
      {isGameStarted ? <GamePlay/>: <StartGame toggle={toogleGamePlay}/>}
    </>
  )

}

export default App
