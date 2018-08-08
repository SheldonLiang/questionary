import React from 'react';

import Answer from './Answer/Answer';

const answers = (props) => (
    <div className="Answers">
        <ul>
            {props.answers.map(answer => 
                <Answer
                    key={answer.id}
                    answer={answer.answer}
                    score={answer.score}
                    chosen={() => props.answerChosenHandler(answer.score)}
                />
            )}
        </ul>
    </div>
);

export default answers;