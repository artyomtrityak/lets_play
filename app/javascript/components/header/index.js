'use strict';
/* @flow */

import React, { Component } from 'react';
import { Link } from 'react-router';
import cn from 'classnames';

import imgUrl from 'assets/images/bgg.png';
import * as AppActions from 'javascript/actions/app.actions';
import { HeaderLoggenInComponent } from './header-logged-in.component';
import { HeaderNotLoggenInComponent } from './header-not-logged-in.component';



let onDisabledClick = (e) => {
  e.preventDefault();
};

let onSignIn = (e) => {
  e.preventDefault();
  AppActions.showSignIn();
};


export let HeaderComponent = (props) => {
  let dropdownCls = cn('dropdown', {open: props.isUserMenuOpen});

  return (
    <div className="navbar navbar-default navbar-static-top">
      <div className="container">
        <div className="navbar-header">
          <a className="navbar-brand" href="#/">
            <img alt="Lets play" src={imgUrl} style={{height: 40, marginTop: -10}} />
          </a>
          <a href="#/" className="navbar-brand">Lets play</a>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav">
            <li className="active"><a href="#/finder">Finder</a></li>
            <li className="disabled"><a onClick={onDisabledClick} href="#/playgroud">Playground</a></li>
            <li className="disabled"><a onClick={onDisabledClick} href="#/organized-play">Organized play</a></li>
          </ul>

          {
            props.isLoggedIn ?
              <HeaderLoggenInComponent
                onMenuToggle={AppActions.toggleUserMenu}
                onCallForPlayers={AppActions.onCallForPlayers}
                isUserMenuOpen={props.isUserMenuOpen}
              />
              :
              <HeaderNotLoggenInComponent onSignIn={onSignIn} />
          }          

        </div>
      </div>
    </div>
  );
};

HeaderComponent.displayName = 'HeaderComponent';
