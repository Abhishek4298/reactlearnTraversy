import React from 'react'

// if in bracket like (props then u can access in the function that value by -> props.text,props.color,props.onClick )
const Button = ({ onClick, color, text }) => {
    return (
        <>
            <button onClick={onClick} style={{ backgroundColor: color }} className="btn">{text}</button>
        </>
    )
}

export default Button
