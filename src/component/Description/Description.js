import React from 'react'
import { Navigate, Route, useNavigate } from 'react-router-dom'
import "./Description.css"
export const Description = () => {
    const navigate = useNavigate()
    return (
        <div className='bodydpn'>
            <h1>Depression Details</h1>
            <div class="containerdpn">
                <section>
                    <h1>What is Depression?</h1>
                    <p>
                        Depression is a common and serious mood disorder that affects how you feel, think, and handle daily activities.
                        It can lead to a variety of emotional and physical problems and can decrease a person's ability to function at work and at home.
                    </p>
                </section>
                <section>
                    <h1>Symptoms of Depression</h1>
                    <p>
                        Common symptoms of depression include persistent sadness, loss of interest or pleasure in activities, changes in appetite or weight,
                        difficulty sleeping or oversleeping, fatigue, feelings of worthlessness, and difficulty concentrating.
                    </p>
                </section>
                <section>
                    <h1>Treatment</h1>
                    <p>
                        Depression is treatable with therapy, medication, or a combination of both. It's essential to seek help from a healthcare professional
                        if you or someone you know is struggling with depression.
                    </p>
                </section>
                <section>
                    <h1>Resources</h1>
                    <p>
                        If you need assistance or more information about depression, consider reaching out to mental health organizations or professionals.
                        <a href="https://www.nimh.nih.gov/health/topics/depression/index.shtml" target="_blank">Visit NIMH's Depression Page</a>
                        for more resources and information.
                    </p>
                </section>
                <div class="quizbutton">
                    <button onClick={() => { navigate("/quizPage") }}>Quiz Time</button>
                </div>
            </div>

        </div>

    )
}
