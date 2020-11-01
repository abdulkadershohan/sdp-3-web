import React, {Component} from 'react';
class Developer extends Component {
    render() {
        return (

            <div className="c-f-b container-fluid d-flex justify-content-center"
            style={{
                height:"100vh",

            }}
            >
                <div className="row">

                    <div className="col-md-4">
                        <div className="a-card text-center shadow">
                            <div className="overflow">

                            </div>
                            <div className="c-b-b card-body text-dark">
                                <h4 className="card-title">Developed by Team 71</h4>
                                <p className="card-text text-secondary">
                                    Bangladesh University of Business and Technology (BUBT)

                                </p>
                                <p className="b-card-text text-secondary">
                                    CSE 38
                                </p>

                                <h3>Developer Contract</h3>

                                <p>Email Us</p>
                                <h6>abdulkadirshohan@gmail.com</h6>

                                <p>Mobile No</p>
                                <a className="text-decoration-none" href="tel:+8801766614798"><h6>+8801766614798</h6></a>

                                <a href="https://www.facebook.com/Covit-19-Survey-FORM-106000444581681" target="_blank" className="btn btn-outline-success">Learn More</a>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Developer;