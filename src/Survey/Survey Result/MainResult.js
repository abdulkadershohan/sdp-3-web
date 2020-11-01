import React, {Component} from 'react';
import ResultDanger from "../../Survey/Survey Result/Danger/Danger";
import ResultAvg from "../../Survey/Survey Result/Average/Average";
import ResultGreen from "../../Survey/Survey Result/Green/Green";
class MainResult extends Component {


    render() {
       // let { score } = 4//this.state;
        const score=3;

        return (
            <div>

                    {score<=1 &&(<ResultGreen/>)}
                    {score===2 &&(<ResultAvg/>)}
                    {score>2  &&(<ResultDanger/>)}



            </div>
        );
    }
}

export default MainResult;