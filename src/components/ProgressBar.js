import "../styles/progressBar.css"





function ProgressBar(props){
    
    return(
    <div className="progress-container" style={{width : props.width}}>
        <div className="progress-fill" style={(props.active) ? {width: props.progress} : {}}></div>
    </div>
);
}

export default ProgressBar;