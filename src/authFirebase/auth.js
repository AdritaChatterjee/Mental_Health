import { auth, googleProvider } from "../config/firebase/configFirebase";
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import QuizData from "../Data/Quizdata";
import { NavLink, useNavigate } from 'react-router-dom'
import "./auth.css"
// let ans;


const Auth = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
    const signIn = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (err) {
            console.error(err);
        }
    };
    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            navigate("/Quiz")
        } catch (err) {
            console.error(err);
        }
    };
   
    return (
        <div className="auth-container">
        <h2>Login and Sign Up</h2>
        <div className="input-group">
          <input
            type="text"
            placeholder="Name"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </div>
        <div className="input-group">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="button-group">
          <button className="auth-button" onClick={signIn}>Sign Up</button>
          {/* <button className="auth-button" onClick={login}>Login</button> */}
          <button className="auth-button" onClick={signInWithGoogle}>Login with Google</button>
        </div>
        {/* {errorMessage && <p className="error-message">{errorMessage}</p>} */}
      </div>
    );
};





export default Auth