import "../styles/flipCard.css"
import natureImg from "../images/port-photos/1.jpeg"
import React, { useState } from 'react';




function FlipCard(props){

    const [isHovered, setHovered] = useState(false);

    return (
        <div className="flipcard" onMouseEnter={() => setHovered(true)} onMouseLeave={() =>setHovered(false)}>
            <img src={props.img_src} className={!isHovered ? "" : "hovered"}></img>
            <div className={!isHovered ? "flipcard-info" : "flipcard-info hovered"}>
                <h1>Logistic Regression Model</h1>
                <p>I created a logistic regression model using numpy to predict the odds of surviving on the titanic.</p>
                <h2>Read More</h2>
            </div>
           
        </div>
    );
}

export default FlipCard;