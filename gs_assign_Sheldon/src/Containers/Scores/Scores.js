import React, { Component } from 'react';
import { connect } from 'react-redux';

class Scores extends Component {
    render() {
        return (
            <div className="Scores">
                <h1>Your total scores are: {this.props.score}</h1>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        score: state.sco.score,
        currentId: state.sco.currentId
    };
};

export default connect(mapStateToProps)(Scores);