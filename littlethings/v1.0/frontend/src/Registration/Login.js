import React from 'react'
import axios from 'axios'
//import './Login.css'
//import {BrowserRouter as Router} from 'react-router-dom'
//import {Route,Redirect} from 'react-router'
//import {browserHistory} from 'react-router'
import {withRouter} from 'react-router-dom';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            user : '',
            email : ''
        }
        const {history}=props;
    }

    onChangeHandler1= (event) => {
        this.setState({user:event.target.value},()=> {console.log(this.state.user)} )
        
    }
    onChangeHandler2= (event) => {
    this.setState({email:event.target.value},() =>{console.log()})
    }
    sendLogin= ()=>
    {
        const {login,signup,seller,customer,history}=this.props;
        if(customer==true)
        {
            axios.post('http://localhost:8019/customer/login', {
                username: this.state.user,
                email: this.state.email,
              })
              .then(function (response) {
                console.log(response.data)
                history.push(`/customer/${response.data}`);
              })
              .catch(function (error) {
                console.log(error);
              });
        }
        else if (seller==true)
        {
            axios.post('http://localhost:8019/seller/login', {
                username: this.state.user,
                 email: this.state.email,
              })
              .then(function (response) {
                console.log(response.data);
                history.push(`/seller/${response.data}`);
              })
              .catch(function (error) {
                console.log(error);
              });
            }
        }


    render(){
    
          return (
          
            <div>
                <center>
                       <div className="card">     
                       <input type="text" id="first" placeholder="UserName" value={this.state.user} onChange = {this.onChangeHandler1}/>
                      <input type="email" id="email" placeholder="Email" value={this.state.email} onChange = {this.onChangeHandler2}/>
                            <button className="button" onClick={this.sendLogin}>Send</button>
                        </div>
                </center>
              
            </div>
            
          )
    }
}
export default withRouter(Login);