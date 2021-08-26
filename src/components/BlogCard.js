import "../styles/blogCard.css"

function BlogCard(props){

     const cata = {"AI" : "Artificial Intelligence", "WB" : "Web Development"}
    return (
    <div className={(props.show) ? "blogCard-container show" : "blogCard-container"} >
        <div>
{/*            
            <img src={props.image}></img>
            <div>this will be the content</div> */}
            {
            (props.data !== {}) &&
            <div className="blogCard-card">
                <img src={props.data.image} alt=""></img>
                <div className="blogCard-text">
                    <h1 className="blogCard-title">
                        {props.data.title}
                    </h1>      
                    <p className="description">
                    {props.data.description} 
                    </p>
                    <h2>{cata[props.data.catagory]}</h2>
                </div>
                <div className="blog-buttons">
                    <button><a href={props.data.github}>Github</a></button>
                    <button onClick={props.hide}>Close</button>
                </div>
            </div>
            }
            
        </div>
    </div>)
}

export default BlogCard;