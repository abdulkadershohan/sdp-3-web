import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './FooterPage.css'

const FooterPagePro = () => {
    return (
        <div className={"footer"}>
        <MDBFooter color="mdb-color" className="container font-small lighten-3 pt-4 mt-4">



            <MDBContainer className="text-center text-md-left">
                <MDBRow className="my-4 ">
                    <MDBCol md="2" lg="2">
                        <h5 className="text-uppercase mb-4 font-weight-bold">
                            Services
                        </h5>
                        <p>
                            <a className="Link text-decoration-none" href="/survey">HEALTH CHECKUP</a>
                        </p>
                        <p>
                            <a  href= "/stats" className="Link  text-decoration-none">LIVE UPDATE</a>
                        </p>


                    </MDBCol>
                    <hr className="clearfix w-100 d-md-none" />
                    <MDBCol md="3" lg="3" className="ml-auto">
                        <h5 className="text-uppercase mb-4 font-weight-bold">About Us</h5>
                        <ul className="about-links">
                            <p>
                                <a className="Link text-decoration-none" href="#">A BRIEF HISTORY</a>
                            </p>
                            <p>
                                <a className=" Link text-decoration-none" href="/team">OUR TEAM</a>
                            </p>
                            <p>
                                <a className="Link text-decoration-none" href="/developer-contract">DEVELOPER CONTRACT</a>
                            </p>

                        </ul>
                    </MDBCol>
                    <hr className="clearfix w-100 d-md-none" />
                    <MDBCol md="5" lg="4">
                        <h5 className="text-uppercase mb-4 font-weight-bold">Address</h5>
                        <p>
                            <i className="fa fa-home mr-3" /> Mirpur-2 Dhaka,1216, Bangladesh
                        </p>
                        <p>
                            <i className="fa fa-envelope mr-3" /> covit19.survey@bd.com
                        </p>
                        <p>
                            <i className="fa fa-phone mr-3" /><a className="text-decoration-none" href="tel:+8801766614798">+ 88 01 766 147 98</a>
                        </p>
                        <p>
                            <i className="fa fa-print mr-3" /><a className="text-decoration-none" href="tel:+8801766614798">+ 88 01 766 147 98</a>
                        </p>
                    </MDBCol>
                    <hr className="clearfix w-100 d-md-none" />
                    <MDBCol md="2" lg="2" className="follow text-center">
                        <h5 className="text-uppercase mb-4 font-weight-bold">
                            Follow us
                        </h5>

                        <div className="social-icon" >
                            <li className="btn">

                                <i className="fab fa-facebook-f mr-3" />
                                <a href="https://www.facebook.com/Covit-19-Survey-FORM-106000444581681" target="_blank"  style={{color:"green"}} className="text-decoration-none">Facebook
                                </a><br/>
                            </li>
                            <li className="btn ">
                                <i className="fab fa-twitter mr-3" />Twitter
                                <a href="#" className="btn-floating btn-small btn-fb">
                                </a>
                            </li>

                            <li className="btn">
                            <i className="fab fa-google-plus mr-3" />Google+
                            <a href="#" className="btn-floating btn-small btn-fb">
                            </a>
                        </li>
                            <li className="btn">
                                <i className="fab fa-linkedin-in"/> Linkedin
                                <a href="#" className="btn-floating btn-small btn-fb">
                                </a>
                            </li>

                        </div>
                    </MDBCol>
                    <hr className="clearfix w-100 d-md-none" />
                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright:{" "}
                    <a href="/">COVID-19-SURVEY-FORM</a>
                </MDBContainer>

            </div>
        </MDBFooter>


        </div>
    );
}

export default FooterPagePro;