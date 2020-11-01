import React, {Component} from 'react';
import './Hotline.css'
import * as FiIcons from "react-icons/fi/index";
class HotLine extends Component {
    render() {
        return (
            <div>

                <div className="useful-numbers-container text-center">
                    <div className="useful-number">
                        <li >
                            <h2 ><FiIcons.FiPhoneCall/>  HOT LINE NUMBERS</h2>

                        </li>
                        <li >
                            <strong>
                                <a className="text-decoration-none" href="tel:333">333</a>
                            </strong><br/>
                            <span>National Call Center </span>
                        </li>

                        <li>
                            <strong>
                                <a className="text-decoration-none" href="tel:09611677777">09611677777</a>
                            </strong><br/>
                            <span>Specialist Health Line</span>
                        </li>
                        <li>
                            <strong>
                                <a className="text-decoration-none" href="tel:10655">09611677777</a>
                            </strong><br/>
                            <span>IEDCR</span>
                        </li>
                        <li>
                            <strong>
                                <a className="text-decoration-none" href="tel:109">09611677777</a>
                            </strong><br/>
                            <span>National Helpline</span>
                        </li>
                    </div>

                </div>
                <div>


                </div>
            </div>
        );
    }
}

export default HotLine;