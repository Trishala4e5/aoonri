import React,{ useState } from 'react';
import "./Searchbar.css";
import { BsCursorFill } from "react-icons/bs";
import Classifieds from "../Classifieds.js";

function Searchbar (){      
        return(
            <div className="Searchbar">                                
                <div className="rightSide">
                    <div className="row" >
                        <div class="col-xs-4">
                            <input type="text"  placeholder="what are you looking for"/>
                            < input type="text"  placeholder="location"/>
                        </div>
                        <div  class="col-xs-4">
                            <div className="select">
                                <select name="format" id="format">
                                    <option selected disabled>select categories</option>
                                    <option value="classifieds" onclick={Classifieds()}>classifieds</option>
                                    <option value="events">Events</option>
                                    <option value="immigration">Immigration</option>
                                    <option value="jobs">jobs</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-xs-4">
                            <input type="search" className="search" placeholder="search now"/>
                        </div>
                        
                        
                        
                    </div> 
                    
                                       
                </div>
                
            </div>

        );
    
}
export default Searchbar;