import "../styles/about.css"
import ProgressBar from "./ProgressBar";
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Fade from 'react-reveal/Fade';
import profileImg from "../images/profile.jpg"


function About() {

    const [active, setActive] = useState(false);

    const { ref, inView, entry } = useInView({
        /* Optional options */
        triggerOnce: true,
        trackVisibility: true,
        delay:1000,
        threshold:0.8,
      });

return (
    <div className="about-container">
        <Fade bottom fraction={1}>
        <div className="about-info">
            <h2 className="topSubHead">about.</h2>
            <h1 className="mainHead">Let me introduce myself.</h1>
            <div className="about-info-pic">
                <img src={profileImg}></img>
                <p className="about-para">Hey, I'm Jack. I'm a third year computer science student. I enjoy building software and also building ai models to solve problems.</p>
            </div>
        </div>
        </Fade>
        <div className="about-content">
            <Fade bottom fraction={0.8}>
            <div className="about-profile">
                <h1 className="about-heading">Profile</h1>
                <p className="about-para">I am an hardworking and motivated individual who is always looking to improve my abilities.</p>
                <h1 className="about-subhead">FULLNAME:</h1>
                <h2 className="about-thinhead">Jack Nicholas Lewis</h2>
                <h1 className="about-subhead">BIRTH DATE:</h1>
                <h2 className="about-thinhead">September 28, 2000</h2>
                <h1 className="about-subhead">EDUCATION:</h1>
                <h2 className="about-thinhead">University of Birmingham</h2>
                <h1 className="about-subhead">COURSE:</h1>
                <h2 className="about-thinhead">Artificial Intelligence and Computer Science BSc</h2>   
            </div>
            </Fade>
            <Fade bottom fraction={0.8}>
            <div className="hobbies" ref={ref}>
                <h1 className="about-heading">Hobbies</h1>
                <p className="about-para">When I'm not working these are a few of the hobbies I like to do in my free time.</p>
                <h1 className="about-subhead">WEIGHT LIFTING</h1>
                <ProgressBar width={"70%"} progress={"90%"} active={inView}/>
                <h1 className="about-subhead" >TENNIS</h1>
                <ProgressBar width={"70%"} progress={"60%"} active={inView}/>
                <h1 className="about-subhead">FILMS {"&"} TV</h1>
                <ProgressBar width={"70%"} progress={"50%"} active={inView}/>
                <h1 className="about-subhead">CODING</h1>
                <ProgressBar width={"70%"} progress={"70%"} active={inView}/>
                
            </div>
            </Fade>
        </div>
        <Fade bottom fraction={1}>
            <div className="about-buttons">
                <button className="button1">Hire Me</button>
                <button className="button2">Download CV</button>
            </div>
        </Fade>
    </div>
);
}

export default About;