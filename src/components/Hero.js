import "../styles/hero.css"
import { Link } from 'react-scroll'

function Hero() {
    return (
      <div className="hero-container">
        <div className="overlay"></div>
        <div className="hero-content">
          <h2>Hello, World.</h2>
          <h1>I'm Jack Lewis</h1>
          <h3>Computer Science Student | University of Birmingham</h3>
          <Link activeClass="selected" smooth={true} to="about-container" duration={500} className="explore-button">
            More About Me
          </Link>
        </div>
      </div>
    );
}
    
export default Hero;