import React from 'react';
import Signup from './Signup';
import Login from './Login';
//import { Button } from 'reactstrap';
//import './Registration.css'

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loading : false,
            login : true,
            signup : false,
            customer : props.customer,
            seller :props.seller
             
        }

    }
    
   
    log = () => {
        this.setState({
            login : true,
            signup : false
        })
        console.log(this.state.customer)
        console.log(this.state.seller)
    }
    sign =() => {

        this.setState({
            login : false,
            signup : true
            
        }) 
        console.log(this.state.customer)
        console.log(this.state.seller)
    }


    render(){
        const {login,signup,seller,customer} = this.state
        return (
            <div>
            <div className="Register"></div>
            <div className="Box">
                 <button onClick = {this.log}> Login </button>
                 <button onClick ={this.sign}> Signup </button>  
                 {login==true && <div> <Login seller={seller} customer={customer} login={login}
                                               signup={signup} /> </div>}
                 {signup==true && <div> <Signup seller={seller} customer={customer} login={login}
                                               signup={signup} /> </div>}
           </div>
           </div>
           
           
           
      
      )

        
        
    
    
  }
}

export default Header