import React, { Component } from 'react';

import ClassList from '../containers/class-list';
import ClassDetail from '../containers/class-detail';

export default class App extends Component {
  render() {
    return (
      <div>
        <ClassList />
        <ClassDetail />
      </div>
    );
  }
}

