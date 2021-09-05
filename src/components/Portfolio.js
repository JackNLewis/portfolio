import "../styles/portfolio.css";
import FlipCard from "./FlipCard";
import React, { useState, useEffect } from 'react';
import BlogCard from "./BlogCard";
import Pagination from '@material-ui/lab/Pagination';
  

function Portfolio() {

    const[data, setData] = useState([]);
    const[selectedBlog, setBlog] = useState(false);
    const[currentBlog, setCurrBlog] = useState({});
    const[page, setPage] = useState(1);

    useEffect(() => {
        fetch('https://jlewis.pythonanywhere.com/blog/?format=json')
        .then(response =>  response.json())
        .then(data => setData(data));
    }, []);
  
    function clickFunc(id){
        setBlog(!selectedBlog);
        console.log("in click function")
        for(let i=0;i<data.results.length;i++){
            if(data.results[i].id === id){
                setCurrBlog(data.results[i]);
                break;
            }
        }
    }

    const handleChange = (event, value) => {
        fetch(`https://jlewis.pythonanywhere.com/blog/?page=${value}&format=json`)
        .then(response =>  response.json())
        .then(data => {
            setData(data)
            console.log(data.results)
        });
        // setData([]);
        setPage(value);
    };

    return (
    <div className="portfolio-container">
        <div className={selectedBlog ? "blog-overlay show" : "blog-overlay"} ></div>
        <BlogCard show={selectedBlog} hide={() => setBlog(!selectedBlog)} data={currentBlog}/>
        <div className="portfolio-info">
            <h2 className="topSubHead">portfolio.</h2>
            <h1 className="mainHead">Here is some of the work I have done.</h1>
            <h3 className="botSubHead">These are some of the projects I have completed.</h3>    
        </div>

        <div className="flipcard-container">
            {
            data.length !==0 ?
            data.results.map((blog) => 
            <span key={blog.id}>
                <FlipCard key={blog.id} id={blog.id} img_src={blog.image} title={blog.title} desc={blog.description} clickFunc={clickFunc}/>
            </span>)
            :
            <h2 className="fetch-message">0 Results</h2>
            }
        </div>
        <Pagination count={data.total_pages} page={page} onChange={handleChange}/>

  </div>
  );
}
    
export default Portfolio;