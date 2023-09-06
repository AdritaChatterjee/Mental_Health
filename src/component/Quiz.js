import React, { useState } from 'react'
import { QuizData } from '../Data/Quizdata'
import { auth } from "../config/firebase/configFirebase"
import { signOut } from "firebase/auth";
import { NavLink, useNavigate } from 'react-router-dom'
import QuizResult from './QuizResult';
import "./Quiz.css"



const Choice = () => {
    const quizNames = ["depresion", "anxiety"];
    const [x, setX] = useState(0);
    const [chosen, setChosen] = useState(false);
    const navigate = useNavigate();
    const handleChange = (e) => {
        // alert(quizNames.length)

        setX(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (x >= 0 && x < quizNames.length)
            setChosen(!chosen);
        else
            window.location.href = 'http://localhost:3000/quiz';

    }
    // return <Quiz x={x}/>
    return (
        <>
            {chosen && (
                <Quiz x={x} />
            )}
            {!chosen && (<form onSubmit={handleSubmit}>
                <input type='number' onChange={handleChange} />
                <button type='submit'>Submit</button>
            </form>)}
        </>
    )
}
function Quiz({ x }) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [clickedOption, setClickedOption] = useState(null)
    const [showResult, setShowResult] = useState(false);
    const quizNames = ["anxiety", "depression"]
    // const [option,selectOption]=useState(false)
    console.log(x);

    // const navigate = useNavigate();
    // const logOut = async () => {
    //     try {
    //         await signOut(auth);
    //         navigate("/")
    //     } catch (err) {
    //         console.error(err);
    //     }
    // };

    const changeQuestion = () => {
        updateScore();
        if (currentQuestion < QuizData.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setClickedOption(0);
        } else {
            setShowResult(true)
        }
    }

    const updateScore = () => {
        if (clickedOption === QuizData[x][currentQuestion].answer) {
            setScore(score + 1);
        }
    }
    const resetAll = () => {
        setShowResult(false);
        setCurrentQuestion(0);
        setClickedOption(0);
        setScore(0);
    }
    console.log(QuizData[0][0].question);
    return (
        <div className='quiz-app--container'>

            <p className="heading-txt" id='heading_quiz'>Quiz APP</p>
            <div className="container">
                {showResult ? (
                    <QuizResult score={score} totalScore={QuizData.length} tryAgain={resetAll} />

                ) : (

                    <>
                        <div className="question">
                            <span id="question-number">{currentQuestion + 1}. </span>
                            <span id="question-txt">{QuizData[x][currentQuestion].question}</span>
                            {/* <span id="question-txt">{QuizData[currentQuestion].question}</span> */}
                        </div>
                        <div className="option-container">
                            {QuizData[x][currentQuestion].options.map((option, i) => {
                                return (
                                    <button
                                        // className="option-btn"
                                        className={`option-btn ${clickedOption == i + 1 ? "checked" : null
                                            }`}
                                        key={i}
                                        onClick={() => setClickedOption(i + 1)}
                                    >
                                        {option}
                                    </button>
                                )
                            })}
                        </div>
                        <input type="button" value="Next" id="next-button" onClick={changeQuestion} />
                    </>
                )}
            </div>
            {/* <button onClick={logOut}>sign out</button> */}
        </div>
    )
}

export default Choice