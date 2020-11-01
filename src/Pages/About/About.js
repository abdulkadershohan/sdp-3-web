import React, { Component } from 'react';
import './About.css'

import About2 from "./About2";

class Team extends Component {
    render() {
        return (
            <>
                <div className="c-f-b container-fluid d-flex justify-content-center">
                    <div className="row">

                        <div className="col-md-4">
                            <About2 title="Developed by Team 71"/>
                        </div>

                    </div>
                </div>


                </>


        );
    }
}

export default Team;