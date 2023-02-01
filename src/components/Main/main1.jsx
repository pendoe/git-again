import React from "react";
import "./main1_style.css"
import Main2 from "./main2";

function Main1(){
    
    return(
        <div id="upper-div">
            <div>
            <div id="upper-main">
            <h1>Changing The World Through Design</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.</p>
            <a href="#" id="box-1">Learn More</a>
            <a href="#" id="box-2">Learn Less</a>
            </div>
            </div>
            <div>
                <Main2 />
            </div> 
        </div>

    )
}

export default Main1;