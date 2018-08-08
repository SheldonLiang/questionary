import React from 'react';

const answer = (props) => (
    <li className="Answer" onClick={props.chosen} >{props.answer}</li>
);

export default answer;