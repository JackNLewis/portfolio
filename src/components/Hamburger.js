import "../styles/hamburger.css"

function Hamburger(props){

    
    function openBurger(){
        props.menuFunc();
          
    }

    return (
    <div className={(!props.open ? "button-container clicked" : "button-container")}
     onClick={openBurger}>
        <div className={"menu_btn"}></div>
    </div>);
}

export default Hamburger;