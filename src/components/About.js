import "../styles/about.css"
import ProgressBar from "./ProgressBar";
import { useInView } from 'react-intersection-observer';
import profileImg from "../images/profile.jpg"
import { Link } from 'react-scroll'

function About(props) {

    
    const { ref, inView } = useInView({
        /* Optional options */
        triggerOnce: true,
        trackVisibility: true,
        delay:1000,
        threshold:0.5,
      });

     
return (
    <div className="about-container">
        <div className="about-info">
            <h2 className="topSubHead">about.</h2>
            <h1 className="mainHead">Let me introduce myself.</h1>
            <div className="about-info-pic">
                <img src={profileImg} alt="profile"></img>
                <p className="about-para">Hey, I'm Jack. I'm a third year computer science student. I enjoy building software and also building ai models to solve problems.</p>
            </div>
        </div>
        <div className="about-content">
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
            <div className="hobbies" ref={ref}>
                <h1 className="about-heading">Hobbies</h1>
                <p className="about-para">When I'm not working these are a few of the hobbies I like to do in my free time.</p>
                <h1 className="about-subhead">CODING</h1>
                <ProgressBar width={"70%"} progress={"90%"} active={inView}/>
                <h1 className="about-subhead" >TENNIS</h1>
                <ProgressBar width={"70%"} progress={"60%"} active={inView}/>
                <h1 className="about-subhead">FILMS {"&"} TV</h1>
                <ProgressBar width={"70%"} progress={"50%"} active={inView}/>
                <h1 className="about-subhead">WEIGHT LIFTING</h1>
                <ProgressBar width={"70%"} progress={"70%"} active={inView}/>
                
            </div>
        </div>
       
            <div className="about-buttons">
                <Link activeClass="selected" spy={true} smooth={true} to="contact-container" duration={500}>
                <button className="button1">Contact Me</button>
                </Link>
                <button className="button2">Download CV</button>
            </div>
    </div>
);
}

export default About;