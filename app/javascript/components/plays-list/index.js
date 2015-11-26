'use strict';

import React, { Component } from 'react';


export let PlaysListComponent = (props) => {
  return (
    <div onClick={playsActions.add}>
      Plays list
    </div>
  );
};

PlaysListComponent.displayName = 'PlaysListComponent';
