import "../styles/portfolio.css";
import FlipCard from "./FlipCard";
import React, { useState, useEffect } from 'react';


function Portfolio() {

  const[data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jlewis.pythonanywhere.com/blog/?format=json')
  .then(response => response.json())
  .then(data => setData(data));
  });


  return (
  <div className="portfolio-container">
    <div className="portfolio-info">
      <h2 className="topSubHead">portfolio.</h2>
      <h1 className="mainHead">Here is some of the work I have done.</h1>
      <h3 className="botSubHead">These are some of the projects I have completed.</h3>
        
    </div>
    <div className="flipcard-container">
      {data.map((blog) => <FlipCard key={blog.id} img_src={blog.image} title={blog.title} desc={blog.description}/>)}
{/*     
      {data.map((blog) => <img src={blog.image}></img>)} */}
    </div>

  </div>
  );
}
    
export default Portfolio;