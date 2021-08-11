import "../styles/skill-card.css";
import Fade from 'react-reveal/Fade';
function SkillCard(props) {
    console.log(props.img_src);
    return (
      <div className="card-container">
       
        <h1 className="skill-title">{props.title}</h1>
        <p className="skill-text">{props.text}</p>
        <img src={props.img} alt={props.title}/>
      </div>
    );
    }
    
export default SkillCard;