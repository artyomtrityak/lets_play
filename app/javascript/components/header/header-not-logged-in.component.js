'use strict';
/* @flow */

import React, { Component } from 'react';


export let HeaderNotLoggenInComponent = (props) => {
  return (
    <p className="navbar-text navbar-right" onClick={props.onSignIn}>
      <span className="glyphicon glyphicon-user" aria-hidden="true"></span>&nbsp;
      <a href="#" className="navbar-link">Sign In</a>
    </p>
  );
};


//TODO: playtest it and remove
function foo(x: string, y: number): number {
  console.log('test 5', y);
  return x.length * y;
}
foo('Hello', 2);


HeaderNotLoggenInComponent.displayName = 'HeaderNotLoggenInComponent';
