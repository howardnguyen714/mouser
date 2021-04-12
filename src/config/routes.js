import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
// import Show from '../components/Show'
import ParkShow from '../components/ParkShow'
import ResortShow from '../components/ResortShow'


export default (
  <Switch>
    <Route exact path='/' component={ Home }/>
    <Route path='/parks/:id' component={ ParkShow }/>
    <Route path='/resorts/:id' component={ ResortShow }/>
  </Switch>
);