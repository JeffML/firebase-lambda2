/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import {
  AppHeader, FileImportRow,
  DatabaseSummaryRow,
  ScidLoadRow,
  HeatMapOptionsRow, HeatMapRow,
} from './components';

import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <AppHeader />
        <FileImportRow />
        <hr />
        <ScidLoadRow />
        <hr />
        <DatabaseSummaryRow />
        <HeatMapOptionsRow />
        <HeatMapRow />
      </div>
    );
  }
}
