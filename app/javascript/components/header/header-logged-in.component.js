'use strict';

import React, { Component } from 'react';
import cn from 'classnames';
import imgUrl from 'assets/images/bgg.png';


export let HeaderLoggenInComponent = (props) => {
  let dropdownCls = cn('dropdown', {open: props.isUserMenuOpen});

  return (
    <span className="navbar-right">
      <button type="button" className="btn btn-primary navbar-btn navbar-left">Call for Players</button>

      <a href="#/user" className="navbar-brand" style={{paddingRight: 0, paddingLeft: 70}}>
        <img src={imgUrl} className="img-responsive img-rounded" alt="Artom Trityak" style={{marginTop: -10, height: 40}} />
      </a>

      <ul className="nav navbar-nav">
        <li className={dropdownCls}>
          <a href="#" className="dropdown-toggle" onClick={props.onMenuToggle}>
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
    </span>
  );
};

HeaderLoggenInComponent.displayName = 'HeaderLoggenInComponent';
