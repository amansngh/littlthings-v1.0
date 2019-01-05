import React from 'react'
import axios from 'axios'

import {withRouter} from 'react-router-dom';
class Signup extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            user : '',
            email : '',
            category : ''
        }
    }
    onChangeHandler1= (event) => {
        this.setState({user:event.target.value},()=> {console.log(this.state.user)} )
        
    }
    onChangeHandler2= (event) => {
    this.setState({email:event.target.value},() =>{console.log(this.state.email)})
    }
    onChangeHandler3= (event) => {
        this.setState({category:event.target.value},() =>{console.log(this.state.category)})
        }
    sendSignup= ()=>
    {
        const {login,signup,seller,customer,history}=this.props;
        //console.log('aman',this.props)
        if(customer==true)
        {
            axios.post('http://localhost:8019/customer/signup', {
                username: this.state.user,
                email: this.state.email,
              })
              .then(function (response) {
                console.log(response.data)
                history.push(`/customer/${response.data}`)
              })
              .catch(function (error) {
                console.log(error);
              });
        }
        else if (seller==true)
        {
            axios.post('http://localhost:8019/seller/signup', {
                username: this.state.user,
                 email: this.state.email,
                 category:this.state.category.split(",")
              })
              .then(function (response) {
                console.log(response);
                history.push(`/seller/${response.data}`)
              })
              .catch(function (error) {
                console.log(error);
              });
                
        }
    }
  render(){
      
  
          return (
          <div>
                 
                <div id="signup">
                      <input type="text" id="first" placeholder="UserName" value={this.state.user} onChange = {this.onChangeHandler1}/>
                      <input type="email" id="email" placeholder="Email" value={this.state.email} onChange = {this.onChangeHandler2}/>
                      {this.props.seller==true && <input type="text" placeholder="category1,category2,.." value={this.state.category} onChange ={this.onChangeHandler3}/> }
                       <button id="send" onClick={()=>this.sendSignup()}>Send</button>
          </div>
              </div>
          
          )
    }
}
export default withRouter(Signup)