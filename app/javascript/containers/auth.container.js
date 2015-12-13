'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';
import { UserStore } from 'javascript/stores/user.store';

import { RegistrationComponent } from 'javascript/components/registration';


export class AuthContainer extends Component {
  constructor(props) {
    super(props);
    this.state = UserStore.getState();
  }

  componentDidMount() {
    UserStore.on('change', this.handleChange, this);
  }

  componentWillUnmount() {
    UserStore.off(null, null, this); 
  }

  handleChange = () => {
    this.setState(UserStore.getState());
  }

  render() {
    if (this.props.activeModal === 'registration') {
      return (
        <RegistrationComponent {...this.state.user} />
      );
    }

    return null;
  }
}

AuthContainer.displayName = 'AuthContainer';
