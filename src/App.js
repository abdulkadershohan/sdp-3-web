import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import Home from './Pages/Home Page/Home';
import Stats from './Pages/Covit-19 Live Stats/Stats'
import Survey from './Survey/Befor Get Started/Survey'
import About from './Pages/About/About'
import PageNotFound from './Pages/Page Not Found/PageNotFOund'
import SurveyContent from "./Survey/Survey Content/SurveyContent";
import Support from "./Pages/Support/Support";
import FooterPagePro from "./Components/Footer/FooterPage";
import UsefulVideos from "./Pages/YoutubeVideos/UsefulVideos";
import Team from "./Pages/About/About";
import Developer from "./Pages/About/Developer/Developer";
import HealthTrips from "./Pages/Health Trips/Health-trips";
import InputForm from "./Components/Form/input-form";
import ResultGreen from "./Survey/Survey Result/Green/Green";
import ResultDanger from "./Survey/Survey Result/Danger/Danger";
import ResultAvg from "./Survey/Survey Result/Average/Average";
import MainResult from "./Survey/Survey Result/MainResult";


function App() {
    return (
        <>

                <Router>

                    <Navbar/>
                    <Switch>

                        <Route exact path='/' component={Home} />
                        <Route exact path='/stats' component={Stats} />
                        <Route exact path='/survey' component={Survey} />
                        <Route exact path='/about' component={About} />
                        <Route exact path='/survey/content' component={SurveyContent} />
                        <Route exact path='/videos' component={UsefulVideos} />
                        <Route exact path='/team' component={Team} />
                        <Route exact path='/support' component={Support}/>
                        <Route exact path='/developer-contract' component={Developer}/>
                        <Route exact path='/health-trips' component={HealthTrips}/>
                        <Route exact path='/input-form' component={InputForm}/>

                        <Route exact path='/result-green' component={ResultGreen}/>
                        <Route exact path='/result-danger' component={ResultDanger}/>
                        <Route exact path='/result-avg' component={ResultAvg}/>
                        <Route exact path='/result' component={MainResult}/>


                        <Route component={PageNotFound}/>

                    </Switch>
                    <footer>
                        <FooterPagePro/>
                    </footer>

                </Router>





        </>
    );
}

export default App;
