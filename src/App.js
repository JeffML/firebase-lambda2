import React, { Component } from 'react'
import { AppHeader, FileImportRow, DatabaseSummaryRow, HeatMapOptionsRow, HeatMapRow } from './components'
// import api from './utils/api'
// import sortByDate from './utils/sortByDate'
// import isLocalHost from './utils/isLocalHost'
import './App.css'

export default class App extends Component {
  render() {
    return <div className="app">
      <AppHeader />
      <FileImportRow />
      <DatabaseSummaryRow />
      <HeatMapOptionsRow />
      <HeatMapRow />
    </div>
  }
}