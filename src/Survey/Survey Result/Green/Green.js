import React, {Component} from 'react';
import './Green.css'
import {Redirect}  from "react-router-dom";
import HotLine from "../../../Pages/Home Page/HotLine";
import HealthTrips from "../../../Pages/Health Trips/Health-trips";
const ResultGreen=()=> {
    if(sessionStorage.getItem("username")!="green"){
        return <Redirect to="/survey"/>
    }
    else {
        return (
            <div className="green">
                <div className="result-green">
                    <div className="green-top">
                        <h1>Result: Green Zone</h1>
                        <p>According to analysis your answer your are in Green Zone</p>
                        <h3>Stay Home Stay safe</h3>
                        <div className="hotline">
                            <HotLine/>
                        </div>
                        <HealthTrips/>
                    </div>
                </div>

            </div>

        );
    }

}
export default ResultGreen