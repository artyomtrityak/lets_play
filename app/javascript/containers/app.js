'use strict';

import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';

/* global styles */
import 'bootstrap/dist/css/bootstrap.css';
import 'assets/styles/main.scss';
import imgUrl from 'assets/images/bgg.png';

export class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container">
            <Link to="/" className="navbar-brand" component={IndexLink}>
              Let's play
            </Link>

            <ul className="nav navbar-nav">
              <li><Link to="/calendar">Calendar</Link></li>
              <li><Link to="/user">User</Link></li>
            </ul>

          </div>
        </nav>
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
