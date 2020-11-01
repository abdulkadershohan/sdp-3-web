import React, {Component} from 'react';
import './Danger.css'
import {Redirect}  from "react-router-dom";
import HotLine from "../../../Pages/Home Page/HotLine";

const ResultDanger=(props)=> {
    if(sessionStorage.getItem("username")!="danger"){
        return <Redirect to="/survey"/>
    }
    else {
        return (
          <div className="danger">
              <div className="result-danger">
                  <div className="danger-top">
                      <h1>Result: Danger Zone</h1>
                      <p>According to analysis your answer your are in Danger Zone</p>
                      <h3>Please go to the nearest hospital</h3>
                      <div className="hotline">
                          <HotLine/>
                      </div>
                  </div>
                  <div className="card-danger">
                      <div className="danger-card-title">
                          <h1>useful links</h1>
                      </div>
                      <div className="card-danger-content">
                          <li>
                              <a href="https://corona.gov.bd/" target={"_blank"}><font color="#17d1ac">corona info</font></a>

                          </li>
                          <li>
                              <a href="https://www.who.int/" target={"_blank"}><font color="#17d1ac">who</font></a>

                          </li>
                          <li>
                              <a href="https://livecoronatest.com/" target={"_blank"}><font color="#17d1ac">live corona test</font></a>

                          </li>
                      </div>

                  </div>
              </div>
          </div>
        );
    }

}
export default ResultDanger