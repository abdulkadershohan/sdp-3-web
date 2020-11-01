import React from "react";
import {Link} from "react-router-dom";

 const CardUi=props=>{
     return(
         <>
            <div className="card-a text-center shadow">
                <div className="overflow">
                    <img src={props.imgsrc} className={"c-i-t card-img-top"} alt="ImageUpdate"/>
                </div>
               <div className="c-b card-body text-dark">
                   <h4 className="card-title">{props.title}</h4>
                   <p className="p-card-text text-secondary">{props.p}</p>
                   <a href={props.url} className="btn btn-outline-success">Learn More</a>
               </div>
            </div>


         </>

     );

}
export default CardUi