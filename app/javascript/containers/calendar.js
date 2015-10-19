'use strict';

import React, { Component } from 'react';

import { CalendarComponent } from 'javascript/components/calendar';

export class Calendar extends Component {
  render() {
    return (
      <div>
        <h1>Calendar Page</h1>
        <CalendarComponent />
      </div>
    );
  }
}

Calendar.displayName = 'CalendarContainer';
