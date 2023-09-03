import { useState } from "react";
import Quiz from "./Quiz";
import { useNavigate } from "react-router-dom";

const Choice1 = () => {
    const navigate=useNavigate();
    const [option, setOption] = useState(-1);
    <Quiz option={option}/>
    const handleSubmit = (e) => {
        e.preventDefault(); 
        navigate(`/quiz/${option}`)
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type="number" onChange={(e)=>setOption(e.target.value)} />
            <button >Submit</button>
        </form> 
        </>
    )
}

export default Choice1;