import React,{ useState } from 'react';
import "./Navbar.css";
import { BsList } from 'react-icons/bs';


function Navbar (){
    const [showLinks, setShowLinks] = useState(false);
    
        return(
            <div className="Navbar">            
                <div className="leftSide">
                    <h1>aaonri</h1>
                </div>                    
                <div className="rightSide">
                    <div className="links" id={showLinks ? "hidden": ""}>
                        <a href="/advertise"> ADVERTISE WITH US </a>
                        <a href="/signin"> SIGN IN/REGISTRATION </a>
                        <a href="/area"> MEMBER AREA </a>
                    </div> 
                    <button onClick={()=> setShowLinks(!showLinks)}><BsList/></button>
                                       
                </div>
                
            </div>

        );
    
}
export default Navbar;