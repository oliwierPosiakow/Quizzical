import '../css/app.css'
import Welcome from './Welcome'
import Question from './Question'
import React from 'react'
import {nanoid} from 'nanoid'
import { decode } from 'he'

function App() {

  const [gameStarted, setGameStarted] = React.useState(false)
  const [trivia, setTrivia] = React.useState([])

  React.useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=5')
      .then(res => res.json())
      .then(data => setTrivia(data.results))
  },[])

  const questions = trivia.map(question => {
    return <Question
      key={nanoid()}
      title={decode(question.question)}
      incorrect_answers={question.incorrect_answers}
      correct_answer={question.correct_answer}
    />
  })

  console.log(questions)

  const displayStyle = {
    display: gameStarted === true ? 'none' : 'block'
  }

  function startGame(){
    setGameStarted(prevGameStarted => !prevGameStarted)
  }

  return (
    <div className="App">
      {!gameStarted && <Welcome style={displayStyle} handleClick={startGame}/>}
      <div className="trivia-questions">
        {questions}
        <button className="check--answers button">Check Answers</button>
      </div>
    </div>
  )
}

export default App
