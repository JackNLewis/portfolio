import "../styles/portfolio.css";
import FlipCard from "./FlipCard";
import natureImg from "../images/port-photos/1.jpeg"


const items = [1,2,3,4];

function Portfolio() {
  return (
  <div className="portfolio-container">
    <div className="portfolio-info">
      <h2>portfolio</h2>
      <h1>Here is some of the work I have done.</h1>
    </div>
    <div className="flipcard-container">
      {items.map((i) => <FlipCard img_src={require('../images/port-photos/' + i +'.jpeg').default}/>)}
    </div>

  </div>
  );
}
    
export default Portfolio;