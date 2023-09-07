import React, { useState } from 'react'
import { QuizData } from '../Data/Quizdata'
import { Navigate, Route} from 'react-router-dom'

import { auth } from "../config/firebase/configFirebase"
import { signOut } from "firebase/auth";
import { NavLink, useNavigate } from 'react-router-dom'
import QuizResult from './QuizResult';
import "./Quiz.css"

const logOut = async () => {
    try {
      await signOut(auth);
      Navigate("/")
    } catch (err) {
      console.error(err);
    }
  };
function Quiz() {
    const [currentQuestion,setCurrentQuestion]=useState(0);
    const [score,setScore] = useState(0);
    const [clickedOption,setClickedOption]=useState(0);
    const [showResult,setShowResult]=useState(false);
    
    const changeQuestion = ()=>{
        updateScore();
        if(currentQuestion< QuizData.length-1){
            setCurrentQuestion(currentQuestion+1);
            setClickedOption(0);
        }else{
            setShowResult(true)
        }
    }
    const updateScore=()=>{
        if(clickedOption===QuizData[currentQuestion].answer){
            setScore(score+1);
        }
    }
    const resetAll=()=>{
        setShowResult(false);
        setCurrentQuestion(0);
        setClickedOption(0);
        setScore(0);
    }
  return (
    <div class="abc">
        <p className="heading-txt">Quiz APP</p>
        <div className="containerab">
            {showResult ? (
                <QuizResult score={score} totalScore={QuizData.length} tryAgain={resetAll}/>
            ):(
            <>
            <div className="question">
                <span id="question-number">{currentQuestion+1}. </span>
                <span id="question-txt">{QuizData[currentQuestion].question}</span>
            </div>
            <div className="option-container">
                {QuizData[currentQuestion].options.map((option,i)=>{
                    return(
                        <button 
                        // className="option-btn"
                        className={`option-btn ${
                            clickedOption == i+1?"checked":null
                        }`}
                        key={i}
                        onClick={()=>setClickedOption(i+1)}
                        >
                        {option}
                        </button>
                    )
                })}                
            </div>
            <input type="button" value="Next" id="next-button" onClick={changeQuestion}/>
            </>)}
        </div>
        {/* <button onClick={logOut}>Sign out</button> */}
    </div>
  )
}

export default Quiz