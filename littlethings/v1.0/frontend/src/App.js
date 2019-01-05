import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';
import axios from 'axios'
import Home from './Registration/Home'
import AppCustomer from './AppCustomer'
import AppShopkeeper from './AppShopkeeper'
import {withRouter} from 'react-router-dom';

//import cors from 'cors'

class App extends Component {
  render() {
    return (
        <BrowserRouter>
        <div className="App">
        <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/customer/:cid" component={AppCustomer} /> 
        <Route path="/seller/:sid" component={AppShopkeeper} /> 
        </Switch>
        </div>
       </BrowserRouter>
    );
  }
}


export default App;
