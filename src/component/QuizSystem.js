// QuizSystem.js
import React, { useState } from 'react';
import quizQuestions from './QuizQuestions';
import { auth } from "../config/firebase/configFirebase"
import { signOut } from "firebase/auth";
import { NavLink, useNavigate } from 'react-router-dom'

const QuizSystem = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(quizQuestions.length).fill(null));
  const [score, setScore] = useState(0);
  const navigate = useNavigate();
  const logOut = async () => {
    try {
      await signOut(auth);
      navigate("/")
    } catch (err) {
      console.error(err);
    }
  };
  const handleAnswerSelect = (selectedAnswer) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestionIndex] = selectedAnswer;
    setUserAnswers(updatedAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Calculate and display score
      const newScore = userAnswers.filter((answer, index) => answer === quizQuestions[index].correctAnswer).length;
      setScore(newScore);
    }
  };

  const currentQuestion = quizQuestions[currentQuestionIndex];

  return (
    <div className="quiz-system">
      <h1>Quiz System</h1>
      {currentQuestion && (
        <div className="question-container">
          <p>{currentQuestion.question}</p>
          <div className="options">
            {currentQuestion.options.map((option, index) => (
              <button key={index} onClick={() => handleAnswerSelect(option)}>
                {option}
              </button>
            ))}
          </div>
          <button onClick={handleNextQuestion}>Next</button>
        </div>
      )}
      {score !== null && (
        <div className="quiz-results">
          <h2>Quiz Results</h2>
          <p>Your score: {score}</p>
        </div>
      )}
      <button onClick={logOut}>sign out</button>
    </div>
  );
};

export default QuizSystem;
