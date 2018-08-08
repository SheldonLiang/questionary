import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const header = (props) => (
    <header className="Header">
        <h1>Welcome {props.name}</h1>
        <nav>
            <ul>
                <li><NavLink to="/login" exact >Log in</NavLink></li>
                <li><NavLink to="/assesment">Start As A Guest</NavLink></li>
            </ul>
        </nav>
    </header>
);

const mapStateToProps = state => {
    return {
        name: state.name.userName
    };
};

export default connect(mapStateToProps)(header);