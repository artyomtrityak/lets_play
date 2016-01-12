'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';
import { AppStore } from 'javascript/stores/app.store';
import { UserStore } from 'javascript/stores/user.store';

import * as AppActions from 'javascript/actions/app.actions';

/* global styles */
import 'bootstrap/dist/css/bootstrap.css';
import 'assets/styles/main.scss';

import { HeaderComponent } from 'javascript/components/header';
import { AuthContainer } from 'javascript/containers/auth.container';


//TODO: add loader handling here
export class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      app: AppStore.getState(),
      user: UserStore.getState()
    };
  }

  componentDidMount() {
    AppStore.on('change', this.handleChange, this);
    UserStore.on('change', this.handleChange, this);
  }

  componentWillUnmount() {
    AppStore.off(null, null, this); 
    UserStore.off(null, null, this); 
  }

  handleChange() {
    this.setState({
      app: AppStore.getState(),
      user: UserStore.getState()
    });
  }

  render() {
    return (
      <div>
        <HeaderComponent isUserMenuOpen={this.state.app.isUserMenuOpen} />
                
        <div className="container">
          {this.props.children}
        </div>

        {/* Modals container */}
        <div>
          <AuthContainer activeModal={this.state.app.activeModal} />

        </div>

      </div>
    );
  }
}

AppContainer.displayName = 'AppContainer';
AppContainer.propTypes = {
  children: React.PropTypes.any
};
