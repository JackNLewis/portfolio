import '../styles/thankyou.css'
import {Link} from "react-router-dom";
  
function ThankYou(){
    return(
    <div className='thankyou-container'>
        <div className='thankyou-inner'>
            <h1>
                Thank You for getting in touch
            </h1>
            <h2>
                I will respond as soon as possible.
            </h2>
            <Link to='/portfolio'>
                <h3>Return to main page</h3>
            </Link>
            
        </div>
            
        
    </div>
)}
 
export default ThankYou;