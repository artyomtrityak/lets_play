'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/* actions */
//import * as actionCreators from 'actions/items';

@connect(state => state.plays)
export class CalendarComponent extends Component {
  constructor(props) {
    super(props);
    //this.actions = bindActionCreators(actionCreators, this.props.dispatch);
  }

  render() {
    console.log('plays', this.props);

    return (
      <div>
        Plays
      </div>
    );
  }
}

CalendarComponent.displayName = 'CalendarComponent';

CalendarComponent.propTypes = {
  dispatch: React.PropTypes.func,
  plays: React.PropTypes.array
};
