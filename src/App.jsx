import { useEffect, useState } from 'react'
import './App.css'
import questionData from './questions.json'

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [timer, setTimer] = useState(10)

  const nextQuestion = () => {
    if (currentQuestion<questionData.length-1)
      {
      setCurrentQuestion(currentQuestion+1)
      setTimer(10)
    }else  setShowScore(true)
  }
  const CheckAnswer = option =>{
    if (questionData[currentQuestion].correctOption === option)
    {
      setScore(score+1)
    }
    nextQuestion()
  }
  const restart = ()=>{
    setCurrentQuestion(0)
    setScore(0)
    setShowScore(false)
    setTimer(10)
  }
  useEffect(()=>{
    let interval;
    if (timer>0 && !showScore) {
      interval = setInterval(()=>{
        setTimer(timer-1)
      },1000)
    }else{
        clearInterval(interval)
        nextQuestion()
      }
      return ()=> clearInterval(interval)
  },[timer,showScore])
  return (
    <>
    <div className="quiz-app">
      {showScore ? (
        <div className="score-section">
        <h2>Your Score : {score}/{questionData.length}</h2>
        <button onClick={restart}>Restart</button>
      </div>) : (   
        <div className="question-section">
        <h2>Question {currentQuestion+1}</h2>
        <p>{questionData[currentQuestion].question}</p>
        <div className="options">
        { questionData[currentQuestion].options.map((option,index)=>(
          <button key={index} onClick={()=>CheckAnswer(option)}>{option}</button>
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
