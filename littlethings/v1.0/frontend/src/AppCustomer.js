import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './componentsCustomer/HeaderCustomer.js'
import { Divider, Segment } from 'semantic-ui-react'
import MainBody from './componentsCustomer/MainBodyCustomer.js'
import axios from 'axios';
//import Shop from './components/Shop.js'

class AppCustomer extends Component {
  constructor(){
    super()
    this.state={
      username:null,
      email:null,
      cid:null
    }
  }
  componentWillMount()
  {
    const cid= this.props.match.params.cid;
    this.fetchDetails(cid)
  }
  
  fetchDetails=(cid)=>{
    axios.get('http://localhost:8019/customer',{
      params : {
        cid : cid
      }
    })
    .then((response)=>{
      const {username,email } = response.data;
      this.setState({
          username,
          email,
          cid
      })
      
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    const {username,email,cid}=this.state
    //console.log('ll',username)
    return (
      <div >
        <Segment>
          <Header />
        <Divider clearing />
          <MainBody username={username} email={email} cid={cid}/>          
        </Segment>
      </div>
    );
  }
}

export default AppCustomer;
