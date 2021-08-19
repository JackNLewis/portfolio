import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "../styles/blog.css"
function Blog() {

    const[blogData, setBlogData] = useState({});
    let {id} = useParams();

    useEffect(() => {
        fetch(`https://jlewis.pythonanywhere.com/blog/${id}/?format=json`)
  .then(response => response.json())
  .then(data => setBlogData(data));
    }
    ,[id]);
    
    return (
      <div className="blog-container">
          <div className="blog-header">
            <h2 className="topSubHead">Created on September 20th, 2020</h2>
            <h1 className="mainHead">{blogData.title}</h1>  
          </div>
          <div>
              <div>
                <img src={blogData.image} alt=""></img>
                 <div className="blog-content">
                    {blogData.description}
                </div>
              </div>
              <div>
                  
              </div>
          </div>
         
      </div>
    );
}
    
export default Blog;