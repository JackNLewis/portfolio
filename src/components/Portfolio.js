import "../styles/portfolio.css";
import FlipCard from "./FlipCard";
import natureImg from "../images/port-photos/1.jpeg"


const items = [1,2,3,4];

function Portfolio() {
  return (
  <div className="portfolio-container">
    <div className="portfolio-info">
      <h2 className="topSubHead">portfolio.</h2>
      <h1 className="mainHead">Here is some of the work I have done.</h1>
      <h3 className="botSubHead">These are some of the projects I have completed.</h3>
        
    </div>
    <div className="flipcard-container">
      {items.map((i) => <FlipCard img_src={require('../images/port-photos/' + i +'.jpeg').default}/>)}
    </div>

  </div>
  );
}
    
export default Portfolio;