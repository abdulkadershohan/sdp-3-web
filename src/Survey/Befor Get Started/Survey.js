import React, {Component, useEffect} from 'react';
import './Survey.css'
import {Link} from "react-router-dom";
import axios from 'axios'
class Survey extends Component {

         state= {
             users: [],
             danger: '',
             yellow: '',
             green: ''
         }

    componentDidMount() {
        axios.get('/select.php')
            .then(res=>{
                this.setState({users:res.data})
            })
            .catch(function (error){
                console.log(error)
            })
    }
    countDanger(){
             let countDanger=0;
        this.state.users.filter(score => score.score >2).map(function (score,i){
            countDanger+=1;
        })
        return countDanger;
    }
    countYellow(){
        let countYellow=0;
        this.state.users.filter(score => score.score ===2).map(function (score,i){
            countYellow+=1;
        })
        return countYellow;
    }
    countGreen(){
        let countGreen=0;
        this.state.users.filter(score => score.score <=1).map(function (score,i){
            countGreen+=1;
        })
        return countGreen;
    }

    render() {

        return (
            <>

            <div className="warning-message">
            <a>
            Welcome. This tool allows you to assess for yourself whether you are at risk of being infected with the Covid-19 or Novel Corona virus, as well as the level of risk and what to do.
            This application was created for testing purposes only. Experimental observers should not be given health advice from this software. The software will keep the information you provide confidential.
            </a>
                <span>
                    <h3><font color="#17d1ac">REFERENCE</font> <span><a href="https://corona.gov.bd/" target="_blank">corona.gov.bd</a> </span></h3>
                </span>
                <div className="Button">
                    <Link to="/survey/content" className="btn btn-outline-success justify-content-center">
                        Get Started
                    </Link>
                </div>
                <section id='covid-19-stats'>
                    <h1 className="p-heading">Total Test Result</h1>
                    <div className="p-b-container">
                        <div className="p-box danger-card">
                            <div className="text-overlay-before">
                                <p>{this.countDanger()}</p>
                            </div>
                            <div className="text-overlay">
                                <h1>Danger</h1>
                                <p>{this.countDanger()}</p>
                            </div>

                        </div>
                        <div className="p-box yellow-card">
                            <div className="text-overlay-before">
                                <p>{this.countYellow()}</p>
                            </div>
                            <div className="text-overlay">
                                <h1>Yellow</h1>
                                <p>{this.countYellow()}</p>
                            </div>

                        </div>
                        <div className="p-box green-card">
                            <div className="text-overlay-before">
                                <p>{this.countGreen()}</p>
                            </div>
                            <div className="text-overlay">
                                <h1>Green</h1>
                                <p>{this.countGreen()}</p>
                            </div>

                        </div>

                    </div>
                </section>

            </div>





            </>
        )
    }
}

export default Survey;