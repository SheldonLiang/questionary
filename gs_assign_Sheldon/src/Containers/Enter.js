import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './Enter.css';
import Questions from './Questions/Questions';
import Login from './Login/Login';
import Header from '../Components/Header/Header';
import Scores from './Scores/Scores';

class Enter extends Component {
    
    render() {
        return (
            <div className="Enter">
                <Header name={this.props.name}/>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/assesment" component={Questions} />
                    <Route path="/scores" component={Scores} />
                </Switch>
            </div>
        );
    }
}

export default Enter;