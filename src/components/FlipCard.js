import "../styles/flipCard.css"
import React, { useState } from 'react';
import Fade from "react-reveal/Fade"


function FlipCard(props){

    const [isHovered, setHovered] = useState(false);

    return (
        <div className="flipcard" onMouseEnter={() => setHovered(true)} onMouseLeave={() =>setHovered(false)}>
            
            <img src={props.img_src} className={!isHovered ? "" : "hovered"} alt="flipcard"></img>
            <div className={!isHovered ? "flipcard-info" : "flipcard-info hovered"}>
                <h1 className={!isHovered ? "" : "hovered"}>{props.title}</h1>
                <h2 className={!isHovered ? "" : "hovered"}>Artificial Intelligence</h2>
            </div>
           
        </div>
    );
}

export default FlipCard;