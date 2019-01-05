import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainBody from './componentsShopkeeper/MainBody.js'
import Header from './componentsShopkeeper/Header.js'
import { Divider, Segment } from 'semantic-ui-react'
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import axios from 'axios'

class App extends Component {

  constructor(){
    super()
    this.state={
      username:null,
      email:null,
      sid:null
    }
  }
  componentWillMount()
  {
    const sid= this.props.match.params.sid;
    this.fetchDetails(sid)
  }

  fetchDetails=(sid)=>{
    axios.get('http://localhost:8019/seller',{
      params : {
        sid : sid
      }
    })
    .then((response)=>{
      const {username,email } = response.data;
      this.setState({
          username,
          email,
          sid
      })
      
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    const {username,email,sid}=this.state
    console.log(this.state)
    return (
      <Segment>
          <Header />
          <Divider clearing />
          <MainBody username={username} email={email} sid={sid} />
      </Segment>
    );
  }
}

export default App;