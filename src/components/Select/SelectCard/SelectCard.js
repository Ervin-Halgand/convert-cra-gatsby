import "./style.css"
import React from 'react'

const SelectCard = ({ title, callBack, isActive, desc, onMouseEnter, onMouseLeave }) => {

    const leave = (verif) => {
        if (onMouseLeave)
            onMouseLeave(verif);
    }

    const enter = () => {
        if (onMouseEnter)
            onMouseEnter(desc);
        leave(true);
    }

    return (
        <button className={`card ${isActive ? 'card__active' : ''}`} onClick={() => callBack(title)}
            onMouseEnter={() => enter()} onMouseLeave={() => leave(false)}>
            {title}
        </button>
    )
}

export default SelectCard;