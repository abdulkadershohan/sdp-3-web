import React, {Component} from 'react';
import './Average.css'
import {Redirect}  from "react-router-dom";
import HotLine from "../../../Pages/Home Page/HotLine";
import HealthTrips from "../../../Pages/Health Trips/Health-trips";
const ResultAvg=()=> {
    if(sessionStorage.getItem("username")!="avg"){
        return <Redirect to="/survey"/>
    }
    else{
        return (
            <div className="avg">
                <div className="result-avg">
                    <div className="avg-top">
                        <h1>Result: yellow Zone</h1>
                        <p>According to analysis your answer your are in yellow Zone</p>
                        <h3>Please go to the nearest hospital</h3>
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
export default ResultAvg