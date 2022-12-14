import { useState, useEffect } from 'react'

export default function GetQuestion (props) {

  const url = `https://jservice.io/api/random`

  const [question, setQuestion] = useState(null)
  const [answer, setAnswer] = useState(false)

  const handleClick = event => {
    setAnswer(hidden => !hidden)
  }
  
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



 const loaded = () => {
  return (
    <main>

      <div className="question">
          <h2>Let's play!</h2>
          <button className="questionBtn" onClick={getQuestion}>Get Question</button>
          <h3 id="question">{question[0].question}</h3>
      </div>

      <div className="category">
        <h3>Category:</h3>
        <h4>{question[0].category.title}</h4>
      </div>

      
      <div className="points">
        <h3>Points:</h3>
        <h4>{question[0].value}</h4>
      </div>

      <div className="answer">
        <h3>Answer:</h3>
        <button className="answerBtn" onClick={handleClick}>Get Answer</button>
        {answer && (<h4>{question[0].answer}</h4>)}
        
      </div>
    </main>
  )
 }

 const loading = () => {
  return <h1>Loading...</h1>
 }

 return question ? loaded() : loading()

    
}