'use strict';

import React, { Component } from 'react';

/* actions */
import * as playsActions from 'javascript/actions/plays';


export let PlaysCalendarComponent = (props) => {
  console.log('plays2', props);

  return (
    <div onClick={playsActions.add}>
      Plays calendar
    </div>
  );
};

PlaysCalendarComponent.displayName = 'PlaysCalendarComponent';
