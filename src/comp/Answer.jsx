
export default function Answer(props){

    const styles = {
        backgroundColor: props.isChecked ? '#D6DBF5' : 'transparent'
    }

    return(
        <div className="answer" onClick={props.handleClick} style={styles}>
            <p>{props.value}</p>
        </div>
    )
}