import React, {Component} from 'react';
import CardUi from "./CardUi";
import './CardUiMain.css'
import image1 from '../../images/HandWash.jpg'
import image2 from '../../images/survey.jpg'
import image3 from '../../images/World Map.jpg'
const p1=[
    "Protect yourself and others from COVID-19.",
    " Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water.",
    " Maintain at least 1 metre (3 feet) distance between yourself and others."

]
const p2=[
    "Are you infected?",
    " Here are some queries about the major symptoms of coronavirus.",
    " By answering the questions you will be able to know about your health condition. During the pandemic situation this process is very safe."

]
const p3=[
    "World Live Stats will provides information about coronavirus real time update.",
    " You can see the Active Cases, Deaths and recover worldwide. By Searching you can know details about a particular countries. You can search also by scrolling."



]


class CardUiMain extends Component {
    render() {
        return (
                <div className="ct-f container-fluid d-flex justify-content-center">
                    <div className="row">
                        <div className="col-md-4">
                            <CardUi imgsrc={image1} title="Health Trips" p={p1} url="/health-trips"/>
                        </div>
                        <div className="col-md-4">
                            <CardUi imgsrc={image2} title="Diagnose your chances of getting infected" p={p2} url="/survey"/>
                        </div>
                        <div className="col-md-4">
                            <CardUi imgsrc={image3} title="World Live States" p={p3} url="/stats"/>
                        </div>


                    </div>
                </div>
        );
    }
}

export default CardUiMain;