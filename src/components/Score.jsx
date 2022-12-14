import React from "react"
import { useState, useEffect } from "react"

export default function Score (props) {
    const [score, setScore] = useState(0)
    const handleIncrement = () => {
                setScore(score + 100)
            }
        
    const handleDecrement = () => {
        if (score !==0) {
            setScore(score - 100)
        }
    }

    const handleReset = () => {
        setScore(0)
    }

    return (
        <div className="Score">
                 <h2>Score: {score}</h2>
                 <section>
                    <button className="decrease" onClick={handleDecrement}>-</button>
                    <button className="increase" onClick={handleIncrement}>+</button>
                    <button className="reset" onClick={handleReset}>Reset</button>
                 </section>
             </div>
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