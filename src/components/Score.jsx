import React from "react"
import { useState } from "react"


export default function Score (props) {

    const [score, setScore] = useState(0)

    const handleIncrement = () => {
                setScore(score + props.question[0].value)
                console.log(props.question)
            }
        
    const handleDecrement = () => {
            setScore(score - props.question[0].value)
    }

    const handleReset = () => {
        setScore(0)
    }

    return (
        <div className="Score">
                 <h2>Score: {score}</h2>
                 <section>
                    <button className="decrease" onClick={handleDecrement}>Wrong Answer -</button>
                    <button className="increase" onClick={handleIncrement}>Correct Answer +</button>
                    <button className="reset" onClick={handleReset}>Reset Score</button>
                 </section>
             </div>
    )
}



