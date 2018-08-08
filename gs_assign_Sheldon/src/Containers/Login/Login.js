import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Login extends Component {

    componentWillMount() {
        this.setState({ name: this.props.name })
    }
    
    render() {
        return (
            <div>
                <label>Please Enter Your Name: </label>
                <input
                    type="text"
                    value={this.props.name}
                    onChange={(event) => this.props.onLogIn(event.target.value)}
                    // onChange={event => {
                    //     this.setState({ name: event.target.value });
                    // }}
                />
                <Link to="/assesment">Start</Link>
            </div>
        );
    }

    componentDidMount() {
        console.log(this.state.name);
    }
}

const mapStateToProps = state => {
    return {
        name: state.name.userName
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLogIn: (name) => dispatch({ type: 'LOGIN', value: name })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
