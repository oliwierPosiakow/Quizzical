import '../css/questions.css'

export default function Question(props){

    const {title, correct_answer, incorrect_answers} = props
    return (
        <div className="question">
            <h2 className="question">{title}</h2>
            <div className="answer--wrapper">
                <div className="answer">{correct_answer}</div>
                <div className="answer">{incorrect_answers[0]}</div>
                <div className="answer">{incorrect_answers[1]}</div>
                <div className="answer">{incorrect_answers[2]}</div>
            </div>
            <hr />
        </div>
    )
}