import "../styles/skill-card.css";
import Fade from 'react-reveal/Fade';
function SkillCard(props) {
    console.log(props.img_src);
    return (
      <div className="card-container">
        <Fade bottom fraction={1}>
        <h1 className="skill-title">{props.title}</h1>
        <p className="skill-text">{props.text}</p>
        <img src={props.img} alt={props.title}/>
        </Fade >
      </div>
    );
    }
    
export default SkillCard;