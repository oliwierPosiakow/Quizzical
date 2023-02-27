import '../css/welcome.css'

export default function Welcome(props){
    return(
        <div className="welcome--banner">
            <h1 className="welcome--h1">Quizzical</h1>
            <p className="welcome--desc">Welcome, to Quizzical! Answer questions and check your trivia skills</p>
            <button className="welcome--button button" >Start quiz</button>
        </div>
    )
} 