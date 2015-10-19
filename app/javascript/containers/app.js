'use strict';

import React, { Component } from 'react';

/* global styles */
import 'bootstrap/dist/css/bootstrap.css';
import 'assets/styles/main.scss';
import imgUrl from 'assets/images/bgg.png';

export class App extends Component {
  render() {
    return (
      <div>
        <img src={imgUrl} />
        <div className="container">
          {this.props.children}
        </div>
        
      </div>
    );
  }
}

App.displayName = 'AppContainer';
App.propTypes = {
  children: React.PropTypes.any
};
