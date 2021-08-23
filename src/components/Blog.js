// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import "../styles/blog.css"
// import ReactMarkdown from "react-markdown";
// import BackIcon from "../images/backIcon.svg"
// import { ReactComponent as BackIcon } from '../images/backIcon.svg';
// import { ReactComponent as BookIcon } from '../images/open-book.svg';
// import {Link } from "react-router-dom";

// function Blog() {

    // const[blogData, setBlogData] = useState({});
    // const[responseData, setResponse] = useState([]);
    // const[backStyle, setBack] = useState({color: "black"});
    // let {id} = useParams();

    // useEffect(() => {
    //     fetch(`https://jlewis.pythonanywhere.com/blog/${id}/?format=json`)
    //     .then(response => response.json())
    //     .then(data => setBlogData(data));

    // fetch(`https://jlewis.pythonanywhere.com/blog/?format=json`)
    //     .then(response => response.json())
    //     .then(data => setResponse(data));
    // }
    


    // ,[id]);
    // console.log(responseData)
    
//     return (
//       <div className="blog-container">
{/* <div className="blog-header">
<Link to="/portfolio" onMouseLeave={() => setBack({color:"#414141"})} onMouseEnter={()=> setBack({color:"#FF006B"})}>
    <h2 className="back" style={backStyle}>back</h2>
</Link>

<h2 className="topSubHead date">Created on September 20th, 2020</h2>
<h1 className="mainHead">{blogData.title}</h1>  
</div>
<div className="blog-content">
  <div className="left-column">
    <img src={blogData.image} alt=""></img>
    <ReactMarkdown className="blog-details">{blogData.description}</ReactMarkdown>
  </div>
  <div className="right-column">
      <div className="recent-posts">
          <h1>Recent Posts</h1>
        {responseData.map(item => 
            <div className="recent-title">
                <BookIcon fill="#414141" />
                <h1>{item.title}</h1>
            </div>
        )}
      </div>
      <div className="github-link">
        <a></a>
      </div>
      <div className="email-link">
        <h3 className=""></h3>
      </div>
  </div>
</div> */}
//       </div>
//     );
// }
    
// export default Blog;
