import "../styles/portfolio.css";
import FlipCard from "./FlipCard";
import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';

function Portfolio() {

  const[data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jlewis.pythonanywhere.com/blog/?format=json')
  .then(response => response.json())
  .then(data => setData(data));
  });


  return (
  <div className="portfolio-container">
    <Fade bottom fraction={1} appear={true}>
    <div className="portfolio-info">
      <h2 className="topSubHead">portfolio.</h2>
      <h1 className="mainHead">Here is some of the work I have done.</h1>
      <h3 className="botSubHead">These are some of the projects I have completed.</h3>    
    </div>
    </Fade>

    <Fade bottom cascade appear={true}>
    <div className="flipcard-container">

      {data.map((blog) => 
      <span key={blog.id}>
          <FlipCard key={blog.id} img_src={blog.image} title={blog.title} desc={blog.description}/>
      </span>)}
    </div>

    </Fade>
    

  </div>
  );
}
    
export default Portfolio;