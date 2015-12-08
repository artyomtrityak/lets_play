'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';
import { AppStore } from 'javascript/stores/app.store';
import * as AppActions from 'javascript/actions/app.actions';

/* global styles */
import 'bootstrap/dist/css/bootstrap.css';
import 'assets/styles/main.scss';

import { HeaderComponent } from 'javascript/components/header';


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
        <HeaderComponent isUserMenuOpen={this.state.isUserMenuOpen} />
                
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
