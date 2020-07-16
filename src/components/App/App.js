import React, {Component} from 'react';
import {
HashRouter as Router,
Route,

} from 'react-router-dom';



import Dashboard from '../Dashboard/Dashboard.js';
import ManageOwners from '../ManageOwners/ManageOwners.js';




import './App.css';

class App extends Component {
  render() {
    return ( 
      <Router>
    <div className="App">
          <Route
            exact
            path="/"
            component={Dashboard}
          />
          <Route
            exact
            path="/ManageOwners"
            component={ManageOwners}
          />
    </div>
      </Router>
  )
  }
}

export default App;
