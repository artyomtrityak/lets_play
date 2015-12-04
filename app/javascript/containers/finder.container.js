'use strict';

import React, { Component } from 'react';
import $ from 'jquery';
import moment from 'moment';
import fullCalendar from 'fullcalendar';

export class FinderContainer extends Component {
  constructor(props) {
    super(props);
    //TODO: get state from app.store
    this.state = {test: 1};
  }

  componentDidMount() {
    $(this.refs.calendar).fullCalendar({
      events: {},
      header: {

        left: 'title',
        center: '',
        right: 'today, prev,next'
      },

      selectHelper: true,
      editable: true,
      firstDay: 1,
      droppable: true,
      dropAccept: true,
      selectable: true,
      allDay: true,

      dayClick: (date) => {
        console.log(date);
      }
    });
  }

  componentWillUnmount() {
    $(this.refs.calendar).fullCalendar('destroy');
  }

  render() {
    return (
      <div>
        <h1>Finder Page</h1>
        
        {React.cloneElement(this.props.children, {...this.state})}
        <div className="calendar" ref="calendar"></div>

      </div>
    );
  }
}

FinderContainer.displayName = 'FinderContainer';
