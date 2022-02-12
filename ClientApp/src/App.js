import React, { Component } from 'react';
import { Route } from 'react-router';
import Header from './components/Header.js'

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Header />
    );
  }
}

