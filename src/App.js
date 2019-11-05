/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import {
  AppHeader, ScidLoadRow,
} from './components';

import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <AppHeader />
        <hr />
        <ScidLoadRow />
        <hr />
      </div>
    );
  }
}
