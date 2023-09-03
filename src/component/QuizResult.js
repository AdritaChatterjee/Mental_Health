import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase/configFirebase"
import { useNavigate } from 'react-router-dom';

function QuizResult(props) {
  const navigate = useNavigate();
    const logOut = async () => {
        try {
            await signOut(auth);
            navigate("/")
        } catch (err) {
            console.error(err);
        }
    };
  return (
    <>
    <div className='show-score'>
        Your Score:{props.score}<br/>
        Total Score:{props.totalScore}
    </div>
    <button id="next-button" onClick={props.tryAgain}>Try Again</button>
    <button onClick={logOut}>sign out</button>
    </>
  )
}

export default QuizResult