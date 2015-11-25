'use strict';

import React, { Component } from 'react';

/* actions */
import * as playsActions from 'javascript/actions/plays';

export let PlaysListComponent = (props) => {
  return (
    <div onClick={playsActions.add}>
      Plays list
    </div>
  );
};

PlaysListComponent.displayName = 'PlaysListComponent';
