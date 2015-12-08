'use strict';

import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { 
  AppContainer,
  PlaygroundContainer,
  FinderContainer,
  OrganizedPlayContainer,
  UserContainer,
  UserLogOutContainer
} from 'javascript/containers';

import { PlaysCalendarComponent } from 'javascript/components/plays-calendar';
import { PlaysListComponent } from 'javascript/components/plays-list';


export default (
  <Route path="/" component={AppContainer}>
    <IndexRoute component={FinderContainer} />

    <Route path="/playground" component={PlaygroundContainer} />
    
    <Route path="/finder" component={FinderContainer}>
      <IndexRoute component={PlaysCalendarComponent} />

      <Route path="/finder/calendar" component={PlaysCalendarComponent} />
      <Route path="/finder/list" component={PlaysListComponent} />  
    </Route>
    
    <Route path="/organized-play" component={OrganizedPlayContainer} />
    
    <Route path="/user" component={UserContainer} />
  </Route>
);
