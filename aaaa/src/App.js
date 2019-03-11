import React, { Component } from 'react';
import {NavLink,Route,HashRouter as Router,Redirect,Switch} from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import Luxian from './components/Luxian'
import Dingzhi from './components/Dingzhi'
import Kepian from './components/Kepian'
import Me from './components/Me'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Switch>
              <Route path="/home" component={Home}></Route>
              <Route path="/luxian" component={Luxian}></Route>
              <Route path="/dingzhi" component={Dingzhi}></Route>
              <Route path="/kepian" component={Kepian}></Route>
              <Route path="/me" component={Me}></Route>
              <Redirect to="/home"/>
            </Switch>        
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
