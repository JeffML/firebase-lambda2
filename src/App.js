/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import {
  AppHeader, FileImportRow,
  DatabaseSummaryRow,
  TestRow,
  HeatMapOptionsRow, HeatMapRow,
} from './components';
// import api from './utils/api'
// import sortByDate from './utils/sortByDate'
// import isLocalHost from './utils/isLocalHost'
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <AppHeader />
        <FileImportRow />
        <hr />
        <TestRow />
        <hr />
        <DatabaseSummaryRow />
        <HeatMapOptionsRow />
        <HeatMapRow />
      </div>
    );
  }
}
