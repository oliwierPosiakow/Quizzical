import '../css/app.css'
import Welcome from './Welcome'
import Question from './Question'
import React from 'react'
import {nanoid} from 'nanoid'
import { decode } from 'he'

function App() {

  const [gameStarted, setGameStarted] = React.useState(false)
  const [trivia, setTrivia] = React.useState([])
  const [round, setRound] = React.useState(0)


  //fetching data from an API and setting trivia
  React.useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=5')
    .then(res => res.json())
    .then(data => {
      setTrivia(data.results.map(el => {
        const answersArr = el.incorrect_answers
        answersArr.push(el.correct_answer)
        const decodedAnswers = answersArr.map(el => decode(el, {level: 'html5'}))
        return {
          question: decode(el.question, {level: 'html5'}),
          answers: decodedAnswers,
          correct: el.correct_answer,
          id: nanoid()
        }
      }))
    })
  },[round])

  const questions = trivia.map(el => {
    return (
      <Question 
        key={nanoid()}
        id={el.id}
        title={el.question}
        answers={el.answers}
        correct={el.correct}
      />
    )
  })

  function startGame(){
    setGameStarted(prevGameStarted => !prevGameStarted)
  }

  return (
    <div className="App">
      {!gameStarted && <Welcome handleClick={startGame}/>}
      <div className="trivia-questions">
        {questions}
        <button className="check--answers button">Check Answers</button>
      </div>
    </div>
  )
}

export default App
