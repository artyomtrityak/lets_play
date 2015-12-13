'use strict';

import React, { Component } from 'react';


export let HeaderNotLoggenInComponent = (props) => {
  return (
    <p className="navbar-text navbar-right" onClick={props.onSignIn}>
      <span className="glyphicon glyphicon-user" aria-hidden="true"></span>&nbsp;
      <a href="#" className="navbar-link">Sign In</a>
    </p>
  );
};

HeaderNotLoggenInComponent.displayName = 'HeaderNotLoggenInComponent';
