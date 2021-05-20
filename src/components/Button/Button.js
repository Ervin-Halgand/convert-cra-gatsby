import "./style.css"
import React from 'react'

const Button = ({ callback, title }) => {
    return (
        <button className="btn" onClick={() => callback !== undefined && callback()}>
            {title}
        </button>
    )
}

export default Button;