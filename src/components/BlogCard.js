import "../styles/blogCard.css"

function BlogCard(props){

    
    return (
    <div className={(props.show) ? "blogCard-container show" : "blogCard-container"} >
        <div className="blogCard-card">
{/*            
            <img src={props.image}></img>
            <div>this will be the content</div> */}
            {
            (props.data !== {}) &&
            <div>
                <img src={props.data.image} alt=""></img>
                <h1 className="blogCard-title">
                    {props.data.title}
                </h1>
              
                    <p className="description">
                       {props.data.description} 
                    </p>
                
                {/* <h2>{props.data.}</h2> */}
            </div>
            }
            <div className="blog-buttons">
                <button>Github</button>
                <button onClick={props.hide}>Close</button>
            </div>
        </div>
    </div>)
}

export default BlogCard;