import React, {Component} from 'react';
import Question from "../question/Question";
import Answer from "../answer/Answer";
import './SurveyContent.css'
import InputForm from "../../Components/Form/input-form";



export default class Quiz extends Component {

    // initiating the local state
    constructor(props) {
        super(props);
        this.state = {


            quiestions: {
                1: 'How old are you?',
                2: 'Select your gender',
                3: 'Do you have a smoking habit?',
                4: "Are you a health worker? (Doctors, nurses, support staff, etc.)",
                5: "I have Shortness of breath",
                6: "I have Dry cough",
                7: "Do you agree I have Sore throat?",
                8: "I feal Extreme weakness (e.g. needing help to get to the bathroom)",
                9: "I have Cold or runny nose",
                10: "Please let us know what your current body temperature is?",
                11: 'I have Abdominal pain, vomiting or thin stools',
                12: 'Feeling of chest pain and pressure',
                13: "Pain in the muscles",
                14: "Not getting the taste",
                15: "Give details of your trip",
                16: "Give additional details of your trip ",
                17: "During the last 14 days, I came in contact with a person infected with the corona virus",
                18: "Do you already have these diseases?",
                19: "Have your symptoms changed in the last 48 hours?"



            },
            answers: {
                1: {
                    1: '0-20',
                    2: '21-30',
                    3: '31-40',
                    4: '41-50',
                    5: '51-65',
                    6: '65+'
                },
                2: {
                    1: 'Male',
                    2: 'Female',
                    3: 'Other'
                },
                3: {
                    1: 'Yes',
                    2: 'No'

                },
                4: {
                    1: 'Yes',
                    2: 'No'
                },
                5:{
                    1: 'Yes',
                    2: 'No'
                },
                6: {
                    1: 'Yes',
                    2: 'No'
                },
                7:{
                    1: 'Yes',
                    2: 'No'
                },
                8:{
                    1: 'Agreed',
                    2: 'Disagreed'
                },
                9:{
                    1: 'Yes',
                    2: 'No'
                },
                10:{
                    1: 'Body temperature is normal at 96 ° F-98.6 ° F',
                    2: 'High fever> 102 F',
                    3: 'Fever 98.6 F-102 F',
                    4: 'I don’t know'
                },
                11:{
                    1: 'Agreed',
                    2: 'Disagreed'
                },
                12:{
                    1: 'Agreed',
                    2: 'Disagreed'
                },
                13:{
                    1: 'Yes',
                    2: 'No'
                },
                14:{
                    1: 'Agreed',
                    2: 'Disagreed'
                },
                15:{
                    1: 'Haven’t travelled anywhere in the last 14 days or come close to anyone with corona or fever, cough, shortness of breath',
                    2: 'In the last 14 days I have been in contact with someone who has a fever, cough, or shortness of breath (e.g. family member / colleague)'

                },
                16:{
                    1: 'In the last 14 days, I have travelled to areas infected with the corona virus or abroad',
                    2: 'I don’t travel to any areas infected with the coronavirus or abroad'
                },
                17:{
                    1: 'Agreed',
                    2: 'Disagreed'
                },
                18:{
                    1: 'Lung problems or Heart problems or High blood pressure or Diabetes or Kidney problems or Cancer',
                    2: 'None of Above'

                },
                19:{
                    1: 'Better than before',
                    2: 'Worse',
                    3: 'There is no change'
                }



            },
            correctAnswers: {
                1: '0',
                2: '0',
                3: '0',
                4: '1',
                5: '1',
                6: '1',
                7: '1',
                8: '1',
                9: '1',
                10: '2',
                11: '1',
                12: '1',
                13: '1',
                14: '1',
                15: '2',
                16: '1',
                17: '1',
                18: '1',
                19: '2'
            },
            correctAnswer: 0,
            clickedAnswer: 0,
            step: 1,
            score: 0,
            buttonName: 'Next'
        }
    }


    // the method that checks the correct answer
    checkAnswer = answer => {
        const { correctAnswers, step, score } = this.state;
        if(answer === correctAnswers[step]){
            this.setState({
                score: score + 1,
                correctAnswer: correctAnswers[step],
                clickedAnswer: answer
            });
        }else{
            this.setState({
                correctAnswer: 0,
                clickedAnswer: answer
            });
        }

    }

    // method to move to the next question
    nextStep = (step) => {
        this.setState({
            step: step + 1,
            correctAnswer: 0,
            clickedAnswer: 0
        });
        const {score,buttonName } = this.state;
        if(score===3 || step===18 ){

            this.setState({
                buttonName: 'Finish',

            })
        }
        if(buttonName==='Finish'){
            this.setState({
                step:20
            })
        }
    }



    render(){
        let { quiestions, answers, correctAnswer, clickedAnswer, step, score } = this.state;
        return(
            <div className="Content-1">
            <div className="Content">
                {step <= Object.keys(quiestions).length ?
                    (<>
                        <Question
                            question={quiestions[step]}
                        />
                        <Answer
                            answer={answers[step]}
                            step={step}
                            checkAnswer={this.checkAnswer}
                            correctAnswer={correctAnswer}
                            clickedAnswer={clickedAnswer}
                        />
                        <button
                            className="NextStep"
                            disabled={
                                clickedAnswer && Object.keys(quiestions).length >= step ? false : true
                            }
                            onClick={() => this.nextStep(step)}>{this.state.buttonName}</button>
                    </>) : (
                        <div className="finalPage">
                            <h1>You have completed the Survey!</h1>
                               <InputForm sendData={score}/>


                        </div>


                    )
                }

            </div>

            </div>

        );
    }
    //<MainResult sendData={score}/>
}
