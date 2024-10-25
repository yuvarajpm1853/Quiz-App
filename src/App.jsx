import { useState } from 'react'
import './App.css'
import questionData from './questions.json'

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [timer, setTimer] = useState(60)

  return (
    <>
    <div className="quiz-app">
      {showScore ? (
        <div className="score-section">
        <h2>Your Score : 3/3</h2>
        <button>Restart</button>
      </div>) : (   
        <div className="question-section">
        <h2>Question {currentQuestion+1}</h2>
        <p>{questionData[currentQuestion].question}</p>
        <div className="options">
        { questionData[currentQuestion].options.map((option,index)=>(
          <button key={index}>{option}</button>
        ))}
        </div>
        <div className="timer">Time Left: 
          <span>{timer}s</span>
        </div>
      </div>)
      }
   
    </div>
    </>
  )
}

export default App
