import React from "react";
import './Cards.css'

const Card = ({emoji, heading, detail}) => {
    return (
        <div className="card" style={{left:'14rem'}}>
            <img src={emoji} alt="" />
            <span>{heading}</span>
            <span>{detail}</span>
            <button className="c-button">LEARN MORE</button>
        </div>
    )
}
export default Card