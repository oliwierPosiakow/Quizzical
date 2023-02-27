import '../css/app.css'
import Welcome from './Welcome'
import React from 'react'

function App() {

  const [gameStarted, setGameStarted] = React.useState(false)

  const displayStyle = {
    display: gameStarted === true ? 'none' : 'block'
  }

  function startGame(){
    setGameStarted(prevGameStarted => !prevGameStarted)
  }

  return (
    <div className="App">
      {!gameStarted && <Welcome style={displayStyle} handleClick={startGame}/>}
    </div>
  )
}

export default App
