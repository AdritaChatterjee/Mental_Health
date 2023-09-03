import React, { useState } from 'react'
import { Link } from 'react-router-dom';
// import {firebase }from 'firebase/app';
import firebase from 'firebase/compat/app';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import './Reactcontact.css';
const Reactcontact = () => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const signIn = async () => {
        try {
            const provider = new firebase.auth.GoogleAuthProvider();
            console.log(firebase.auth.GoogleAuthProvider(), "jjjjjjjjjjjjjjjjjjjjjjjjjjjjj");
            await firebase.auth().signInWithPopup(provider);
            const currentUser = firebase.auth().currentUser;
            setUser(currentUser);
        } catch (error) {
            console.error('Error signing in:', error);
        }
    };

    const signOut = async () => {
        try {
            await firebase.auth().signOut();
            setUser(null);
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    let name, value;
    const getUserData = (event) => {
        name = event.target.name;
        value = event.target.value;

        setUser({ ...user, [name]: value })
    };

    const postData = async (e) => {
        e.preventDefault();

        const { name, email, phone, message } = user;

        const res = await fetch(
            "https://reactform-7b6b6-default-rtdb.firebaseio.com/youtubereactform.json", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                email,
                phone,
                message,
            })
        }
        );

        if (res) {
            setUser({
                name: "",
                email: "",
                phone: "",
                message: "",
            });
            alert("Thank you for your submission");
        }
    };

    return (
        <div class="container-contact100">
            <div class="wrap-contact100">
                <form class="contact100-form" method='POST'>
                    <span class="contact100-form-tittle">Contact Us</span>

                    <div class="wrap-input100 rsl-wrap-input100">
                        <span class="label-input100">Your Name</span>
                        <input
                            class="input100"
                            type='text'
                            name='name'
                            placeholder='Enter your name'
                            value={user.name}
                            onChange={getUserData}
                            autoComplete='off'
                            required
                        />
                        <span class="focus-input100"></span>
                    </div>

                    <div class="wrap-input100 rsl-wrap-input100">
                        <span class="label-input100">Email</span>
                        <input
                            class="input100"
                            type='text'
                            name='email'
                            placeholder='Enter your email address'
                            value={user.email}
                            onChange={getUserData}
                            autoComplete='off'
                            required
                        />
                        <span class="focus-input100"></span>
                    </div>

                    <div class="wrap-input100 rsl-wrap-input100">
                        <span class="label-input100">Mobile Number</span>
                        <input
                            class="input100"
                            type='text'
                            name='phone'  // Change this to 'phone'
                            placeholder='Enter your Mobile Number'
                            value={user.phone}
                            onChange={getUserData}
                            autoComplete='off'
                            required
                        />
                        <span class="focus-input100"></span>
                    </div>

                    <div class="wrap-input100">
                        <span class="label-input100">Message</span>
                        <textarea
                            class="input100"
                            type='text'
                            name='message'
                            placeholder='Write us a message...'
                            value={user.message}
                            onChange={getUserData}>
                        </textarea>

                        <span class="focus-input100"></span>
                    </div>

                    <div class="container-contact100-form-btn">
                        <button class="contact100-form-btn" onClick={() => signIn()}>
                            <span>
                                Submit
                                <i
                                    class="fa fa-long-arrow-right m-l-7"
                                    aria-hidden="true"></i>
                            </span>
                        </button>
                    </div>
                </form>
                <button class="contact100-form-btn" onClick={() => signIn()}>
                    <span>
                        signIn
                        <i
                            class="fa fa-long-arrow-right m-l-7"
                            aria-hidden="true"></i>
                    </span>
                </button>
                <button class="contact100-form-btn" onClick={() => signOut()}>
                    <span>
                        signOut
                        <i
                            class="fa fa-long-arrow-right m-l-7"
                            aria-hidden="true"></i>
                    </span>
                </button>
            </div>
        </div>
    )
}

export default Reactcontact