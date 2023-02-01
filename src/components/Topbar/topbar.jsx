import React from "react";
import "./topbar_style.css";
function TopBar(){
    
    return(
       <>
        <nav>
            <div id="top-left">
            <a>Yeti Agency</a>
            <a href="#">One</a>
            <a href="#">Two</a>    
            </div>

            <div id="top-right">
            <a href="#">Three</a>
            <a href="#">Four</a>
            <a href="#">Five</a>
            <a href="#">Six</a>                
            </div>
        </nav>
       </>       
    )
}

export default TopBar;