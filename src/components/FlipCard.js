import "../styles/flipCard.css"
import React, { useState } from 'react';




function FlipCard(props){

    const [isHovered, setHovered] = useState(false);

    return (
        <div className="flipcard" onMouseEnter={() => setHovered(true)} onMouseLeave={() =>setHovered(false)}>
            <img src={props.img_src} className={!isHovered ? "" : "hovered"} alt="flipcard"></img>
            <div className={!isHovered ? "flipcard-info" : "flipcard-info hovered"}>
                <h1>{props.title}</h1>
                <p>{props.desc}</p>
                <h2>Read More</h2> 
            </div>
           
        </div>
    );
}

export default FlipCard;