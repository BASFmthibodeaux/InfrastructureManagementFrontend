import React, { Component } from 'react';
import './App.css';
import { Sidebar } from './Components/Sidebar/sidebar.component';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './Pages/Home.js';
import { Reports } from './Pages/Reports';
import { Patching } from './Pages/Patching';
import { Servers } from './Pages/Servers';
import { Performance } from './Pages/Performance';


export class App extends Component {

  constructor() {
      super()
      this.state = {
          monsters: [],
          searchfield: ''  
      };
  }
  
  render() {
      return (
        <>
        <Router>
          <Sidebar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/reports' component={Reports} />
            <Route path='/servers' component={Servers} />
            <Route path='/patching' component={Patching} />
            <Route path='/performance' component={Performance} />
          </Switch>
        </Router>
      </>
      )
  }
}


export default App
