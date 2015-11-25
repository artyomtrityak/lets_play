'use strict';

import React, { Component } from 'react';


export class FinderContainer extends Component {
  constructor(props) {
    super(props);
    //TODO: get state from app.store
    this.state = {test: 1};
  }

  render() {
    return (
      <div>
        <h1>Finder Page</h1>
        
        {React.cloneElement(this.props.children, {...this.state})}

      </div>
    );
  }
}

FinderContainer.displayName = 'FinderContainer';
