import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
// import Show from '../components/Show'
import ParkShow from '../components/ParkShow'

export default (
  <Switch>
    <Route exact path='/' component={ Home }/>
    <Route path='/parks/:id' component={ ParkShow }/>
  </Switch>
);