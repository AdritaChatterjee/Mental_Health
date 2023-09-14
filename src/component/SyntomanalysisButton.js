import React from 'react'

export default function SyntomanalysisButton({ title, index, setDataIndex }) {
    const handleClick = () => {
        // alert('Button clicked!');
        setDataIndex(index)
    };
    return (
        <div className='MyButton'>
            <button onClick={handleClick}>{title}</button>
        </div>
    )
}
