'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';
import { AppStore } from 'javascript/stores/app.store';
import * as AppActions from 'javascript/actions/app.actions';

/* global styles */
import 'bootstrap/dist/css/bootstrap.css';
import 'assets/styles/main.scss';
import imgUrl from 'assets/images/bgg.png';


//TODO: add loader handling here
export class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = AppStore.getState();
  }

  componentDidMount() {
    AppStore.on('change', this.handleChange, this);
  }

  componentWillUnmount() {
    AppStore.off(null, null, this); 
  }

  handleChange = () => {
    this.setState(AppStore.getState());
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container">
            
            <Link to="/" className="navbar-brand">
              Let's play
            </Link>

            <ul className="nav navbar-nav">
              <li><Link to="/finder">Calendar</Link></li>
              <li><Link to="/user">User</Link></li>
            </ul>

          </div>
        </nav>
        
        <img src={imgUrl} onClick={AppActions.test} />
        
        <div className="container">
          {this.props.children}
        </div>

      </div>
    );
  }
}

AppContainer.displayName = 'AppContainer';
AppContainer.propTypes = {
  children: React.PropTypes.any
};
