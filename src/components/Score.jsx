import React from "react"
import { useState, useEffect } from "react"
import GetQuestion from "./GetQuestion"

export default function Score (props) {

    const url = `https://jservice.io/api/random`
    
    const [question, setQuestion] = useState(null)
    const [score, setScore] = useState(0)

    const getQuestion = async () => {
        try {
          const response = await fetch(url)
          const data = await response.json()
          setQuestion(data)
        } catch (err) {
          console.log(err)
        }
    }

    useEffect(() => {
        getQuestion()
      }, [])

    const handleIncrement = (evt) => {
                getQuestion()
                setScore(score + question[0].value)
                console.log(question)
            }
        
    const handleDecrement = () => {
            getQuestion()
            setScore(score - question[0].value)
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
            //  {console.log(props)}
    )
}



// export default function Score (props) {
//     const url = `http://jservice.io/api/random`
//     //0.question
  
//     const [score, setScore] = useState(0)

//     const getScore = async () => {
//         try {
//           const response = await fetch(url)
//           const data = await response.json()
//           setScore(data)
//         } catch (err) {
//           console.log(err)
//         }
//       }
    
//       useEffect(() => {
//         getScore()
//       }, [])


//     const handleIncrement = () => {
//         setScore(score + score[0].value)
//     }

//     const handleDecrement = () => {
//         if (score !==0) {
//             setScore(score - score[0].value)
//         }
//     }

//     const loaded = () => {
//         return (
//             <div className="Score">
//                 <h1>Score: {score}</h1>
//                 <section>
//                     <button onClick={handleIncrement}>+</button>
//                     <button onClick={handleDecrement}>-</button>
//                 </section>
//             </div>
//         )
//     }

//     const loading = () => {
//         return (
//             <h1>Loading...</h1>
//         )
//     }

//     return  loaded() 
    
// }