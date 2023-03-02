import '../css/questions.css'
import { decode } from 'he'
import React from 'react'
import {nanoid} from 'nanoid'
import Answer from './Answer'

export default function Question(props){
    const {title, answers} = props
    const [answersArr, setAnswersArr] = React.useState(setAnswersObj)

    function setAnswersObj(){
        return answers.map(item => {
            return {
                value: item,
                isChecked: false,
                key: nanoid(),
                id: nanoid()
            }
        })
    }

    function selectedAnswer(id){
        setAnswersArr(oldAnswers => oldAnswers.map(answer => {

            if(answer.value == props.correct && answer.id == id){
                props.setCorrect(id)
            }

            return answer.id === id ?
                {...answer, isChecked: !answer.isChecked} :
                {...answer, isChecked: false}   
            }
        ))
    }

    const answersEl = answersArr.map(answer => {
        return (
            <Answer
                key={nanoid()}
                value={answer.value}
                isChecked={answer.isChecked}
                parentId={props.id}
                handleClick={()=> selectedAnswer(answer.id, answer.value)}
            />
        )
    })
    return (
        <div className="question">
            <h2 className="question">{title}</h2>
            <div className="answer--wrapper">
                {answersEl}
            </div>
            <hr />
        </div>
    )
}