import "../styles/about.css"
import ProgressBar from "./ProgressBar";
// import { useSpring, animated } from 'react-spring'
import React, { useState } from 'react';

function About() {

    const [active, setActive] = useState(false);

return (
    <div className="about-container">
        <div className="about-info">
            <h2 className="topSubHead">about.</h2>
            <h1 className="mainHead">Let me introduce myself.</h1>
            <div className="">
                <img src=""></img>
                <p className="">Hey, I'm Jack. I'm a third year computer science student. I enjoy building software and also building ai models to solve problems.</p>
            </div>
        </div>
        <div className="about-content">
            
            <div className="about-profile">
                <h1 className="about-heading">Profile</h1>
                <p className="about-intro">I am an hardworking and motivated individual who is always looking to improve my abilities.</p>
                <h1 className="about-subhead">FULLNAME:</h1>
                <h2 className="about-thinhead">Jack Nicholas Lewis</h2>
                <h1 className="about-subhead">BIRTH DATE:</h1>
                <h2 className="about-thinhead">September 28, 2000</h2>
                <h1 className="about-subhead">EDUCATION:</h1>
                <h2 className="about-thinhead">University of Birmingham</h2>
                <h1 className="about-subhead">COURSE:</h1>
                <h2 className="about-thinhead">Artificial Intelligence and Computer Science BSc</h2>
                
            </div>
            <div className="hobbies">
                <h1 className="about-heading">Hobbies</h1>
                <p className="about-intro">When I'm not working these are a few of the hobbies I like to do in my free time.</p>
                <h1 className="about-subhead">WEIGHT LIFTING</h1>
                <ProgressBar width={"70%"} progress={"90%"} active={active}/>
                <h1 className="about-subhead" >TENNIS</h1>
                <ProgressBar width={"70%"} progress={"60%"} active={active}/>
                <h1 className="about-subhead">FILMS {"&"} TV</h1>
                <ProgressBar width={"70%"} progress={"50%"} active={active}/>
                <h1 className="about-subhead">CODING</h1>
                <ProgressBar width={"70%"} progress={"70%"} active={active}/>
                <button onClick={() => setActive(!active)}>click me</button>
            </div>
        </div>
        <div className="profile">
        </div>
    </div>
);
}

export default About;