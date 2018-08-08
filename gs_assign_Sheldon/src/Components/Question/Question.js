import React from 'react';

import Answers from './Answers/Answers';
import backButton from '../../Assets/prev.jpg';

const question = (props) => (
    <div className="Question">
        <label>
            {/* Do not show the backButton if is the 1st question */}
            {props.currentQuestionId ? 
            <img
                title="Back"
                alt="Back"
                onClick={props.backClicked}
                src={backButton}
            /> : null}
            <span>{props.currentQuestionId+1} / {props.questionAmount}</span>
        </label>
        <h1>{props.title}</h1>
        <p>{props.detail}</p>
        {/* <p>{props.score}</p> */}
        <Answers
            answers={props.answers}
            answerChosenHandler={props.answerClicked}
        />
    </div>
);

export default question;