import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Question from '../../Components/Question/Question';
import LocalQuestions from '../../API/questions';

class Questions extends Component {
    state = {
        questions: [],
        lastQuestion: false
    }

    componentDidMount() {
        axios.get('link') // Get data from server or local
            .then(response => {
                // Get the questions data from server
                const serverQuestions = response.data.options;
                this.setState({ questions: serverQuestions });
            })
            .catch(error => {
                console.log(error);
                // Get the questions data from local fake api
                const localQuestions = LocalQuestions.options;
                this.setState({ questions: localQuestions });
            });
    }

    render() {
        let questions = this.state.questions.map(question =>
            <Question
                key={question.questionID}
                title={question.title}
                detail={question.detail}
                answers={question.answers}
                answerClicked={this.props.onSelect}
                backClicked={this.props.onBack}
                currentQuestionId={this.props.currentId}
                questionAmount={this.state.questions.length}
                score={this.props.score}
            />
        );

        // If this is the last question
        if (this.props.currentId === this.state.questions.length && this.state.questions.length !== 0) {
            this.setState({ lastQuestion: true });
        }

        return (
            <div>
                {/* Redirect to scores component if finish the last question */}
                {this.state.lastQuestion && <Redirect to="/scores" />}
                <section className="Posts">
                    {questions[this.props.currentId]}
                </section>
            </div >
        );
    };
}

const mapStateToProps = state => {
    return {
        score: state.sco.score,
        currentId: state.sco.currentId,
        scores: state.sco.scores
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSelect: (score) => dispatch({ type: 'SELECT', sco: score }),
        onBack: () => dispatch({ type: 'BACK' })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
