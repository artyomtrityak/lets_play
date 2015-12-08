'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';
import cn from 'classnames';

import imgUrl from 'assets/images/bgg.png';
import * as AppActions from 'javascript/actions/app.actions';

let onDisabledClick = (e) => {
  e.preventDefault();
};


export let HeaderComponent = (props) => {
  let dropdownCls = cn('dropdown', {open: props.isUserMenuOpen});

  return (
    <div className="navbar navbar-default navbar-static-top">
      <div className="container">
        <div className="navbar-header">
          <a className="navbar-brand" href="#/">
            <img alt="Let's play" src={imgUrl} style={{height: 40, marginTop: -10}} />
          </a>
          <a href="#/" className="navbar-brand">Let's play</a>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav">
            <li className="active"><a href="#/finder">Finder</a></li>
            <li className="disabled"><a onClick={onDisabledClick} href="#/playgroud">Playground</a></li>
            <li className="disabled"><a onClick={onDisabledClick} href="#/organized-play">Organized play</a></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li className={dropdownCls}>
              <a href="#" className="dropdown-toggle" onClick={AppActions.toggleUserMenu}>
                Artyom Trityak <span className="caret"></span>
              </a>
              <ul className="dropdown-menu">
                <li><a href="#/user">Profile</a></li>
                <li><a href="#/user/my-plays">My plays</a></li>
                <li><a href="#/user/friends">Friends</a></li>
                <li><a href="#/user/my-collection">My collection</a></li>
                <li><a href="#/user/wishlist">Wishlist</a></li>
                <li role="separator" className="divider"></li>
                <li><a href="#/user/logout">Logout</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

HeaderComponent.displayName = 'HeaderComponent';
